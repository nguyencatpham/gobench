// Code generated by entc, DO NOT EDIT.

package group

const (
	// Label holds the string label denoting the group type in the database.
	Label = "group"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"

	// EdgeApplication holds the string denoting the application edge name in mutations.
	EdgeApplication = "application"
	// EdgeGraphs holds the string denoting the graphs edge name in mutations.
	EdgeGraphs = "graphs"

	// Table holds the table name of the group in the database.
	Table = "groups"
	// ApplicationTable is the table the holds the application relation/edge.
	ApplicationTable = "groups"
	// ApplicationInverseTable is the table name for the Application entity.
	// It exists in this package in order to avoid circular dependency with the "application" package.
	ApplicationInverseTable = "applications"
	// ApplicationColumn is the table column denoting the application relation/edge.
	ApplicationColumn = "application_groups"
	// GraphsTable is the table the holds the graphs relation/edge.
	GraphsTable = "graphs"
	// GraphsInverseTable is the table name for the Graph entity.
	// It exists in this package in order to avoid circular dependency with the "graph" package.
	GraphsInverseTable = "graphs"
	// GraphsColumn is the table column denoting the graphs relation/edge.
	GraphsColumn = "group_graphs"
)

// Columns holds all SQL columns for group fields.
var Columns = []string{
	FieldID,
	FieldName,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the Group type.
var ForeignKeys = []string{
	"application_groups",
}
