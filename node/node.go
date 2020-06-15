package node

import (
	"context"
	"errors"
	"log"
	"os"
	"sync"
	"time"

	"github.com/gobench-io/gobench/metrics"
	"github.com/gobench-io/gobench/scenario"
	gometrics "github.com/rcrowley/go-metrics"
)

// ErrIDNotFound is raised when the metric title is not found
var ErrIDNotFound = errors.New("id not found")

type status string

type unit struct {
	Title    string             // metric title
	Type     metrics.MetricType // to know the currnt unit type
	metricID int                // metric table foreign key
	c        gometrics.Counter
	h        gometrics.Histogram
	g        gometrics.Gauge
}
// Node is the main structure for a running node
// contains host information, the scenario (plugin)
// and gometrics unit
type Node struct {
	mu       sync.Mutex
	hostname string
	pid      int

	status     status
	pluginPath string
	vus        *scenario.Vus

	units map[string]unit // title - gometrics
}

const (
	idle    status = "idle"
	running status = "running"
)

// the sigleton node variable
var node Node

func init() {
	hostname, _ := os.Hostname()
	pid := os.Getpid()

	node = Node{
		pid:      pid,
		hostname: hostname,
		status:   idle,

		units: make(map[string]unit),
	}
}

// New return the singleton node
func New() (*Node, error) {
	return &node, nil
}

func (n *Node) reset() {
	n.mu.Lock()
	n.status = idle
	n.units = make(map[string]unit)
	n.mu.Unlock()
}

// Load downloads the go plugin, extracts the virtual user scenario
func (n *Node) Load(so string) error {
	vus, err := scenario.LoadPlugin(so)
	if err != nil {
		return err
	}

	n.mu.Lock()
	defer n.mu.Unlock()

	n.pluginPath = so
	n.vus = &vus

	return nil
}

// Run starts the preloaded plugin
func (n *Node) Run() {
	n.mu.Lock()
	n.status = running
	n.mu.Unlock()

	n.run()
}

func (n *Node) run() {
	ctx, _:= context.WithCancel(context.Background())

	var donewg sync.WaitGroup

	var totalVu int

	vus := *n.vus
	for i := range vus {
		totalVu += vus[i].Nu
	}

	go n.logScaled(ctx, 10 * time.Second)

	donewg.Add(totalVu)

	for i := range vus {
		for j := 0; j < vus[i].Nu; j++ {
			go func(i, j int) {
				vus[i].Fu(ctx, j, &donewg)
			}(i, j)
		}
	}

	donewg.Wait()

	// when finish, reset the node
	n.reset()
}

func (n *Node) logScaled(ctx context.Context, freq time.Duration) {
	ch := make(chan interface{})

	go func(channel chan interface{}) {
		for range time.Tick(freq) {
			channel <- struct{}{}
		}
	}(ch)

	if err := n.logScaledOnCue(ctx, ch); err != nil {
		log.Fatalln(err)
	}
}

func (n *Node) logScaledOnCue(ctx context.Context, ch chan interface{}) error {
	for {
		select {
		case <- ch:
			now := timestampMs()
			n.mu.Lock()
			units := n.units
			n.mu.Unlock()

			for _, u := range units {
				switch u.Type {
				case metrics.Counter:
					n.logCounter(u.Title, now, u.c.Count())
				case metrics.Histogram:
					h := u.h.Snapshot()
					n.logHistogram(u.Title, now, h)
				case metrics.Gauge:
					n.logGauge(u.Title, now, u.g.Value())
				}
			}
		case <- ctx.Done():
			break
		}
	}
	return nil
}

func (n *Node) logCounter(title string, time, c int64) error {
	// todo: process counter log
	log.Printf("logCounter: title %s, time %d, count %d\n", title, time, c)
	return nil
}

func (n *Node) logHistogram(title string, time int64, h gometrics.Histogram) error {
	// todo: process histogram log
	log.Printf("logHistogram: title %s, time %d, mean %d\n", title, time, h.Mean())
	return nil
}

func (n *Node) logGauge(title string, time int64, g int64) error {
	// todo: process gauge log
	log.Printf("logGauge: title %s, time %d, value %d\n", title, time, g)
	return nil
}

func timestampMs() int64 {
	return time.Now().UnixNano() / 1e6 // ms
}

// Setup is used for the worker to report the metrics that it will generate
func Setup(groups []metrics.Group) error {
	units := make(map[string]unit)

	for _, group := range groups {
		for _, graph := range group.Graphs {
			for _, m := range graph.Metrics {
				// counter type
				if m.Type == metrics.Counter {
					c := gometrics.NewCounter()
					if err := gometrics.Register(m.Title, c); err != nil {
						if _, ok := err.(gometrics.DuplicateMetric); ok {
							continue
						}
						return err
					}

					units[m.Title] = unit{
						Title: m.Title,
						Type:  m.Type,
						// metricID: metricInstance.ID,
						c: c,
					}
				}

				if m.Type == metrics.Histogram {
					s := gometrics.NewExpDecaySample(1028, 0.015)
					h := gometrics.NewHistogram(s)
					if err := gometrics.Register(m.Title, h); err != nil {
						if _, ok := err.(gometrics.DuplicateMetric); ok {
							continue
						}
						return err
					}
					units[m.Title] = unit{
						Title: m.Title,
						Type:  m.Type,
						// metricID: metricInstance.ID,
						h: h,
					}
				}

				if m.Type == metrics.Gauge {
					g := gometrics.NewGauge()
					if err := gometrics.Register(m.Title, g); err != nil {
						if _, ok := err.(gometrics.DuplicateMetric); ok {
							continue
						}
						return err
					}
					units[m.Title] = unit{
						Title: m.Title,
						Type:  m.Type,
						// metricID: metricInstance.ID,
						g: g,
					}
				}
			}
		}
	}

	// aggregrate units
	node.mu.Lock()
	for k, v := range units {
		node.units[k] = v
	}
	node.mu.Unlock()

	return nil
}

// Notify saves the id with value into metrics which later save to database
func Notify(title string, value int64) error {
	log.Printf("node notify title: %s, value %d\n", title, value)

	node.mu.Lock()
	defer node.mu.Unlock()

	u, ok := node.units[title]
	if !ok {
		log.Printf("error metric title %s not found\n", title)
		return ErrIDNotFound
	}

	if u.Type == metrics.Counter {
		u.c.Inc(value)
	}

	if u.Type == metrics.Histogram {
		u.h.Update(value)
	}

	if u.Type == metrics.Gauge {
		u.g.Update(value)
	}

	return nil
}
