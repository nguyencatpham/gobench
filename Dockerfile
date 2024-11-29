# build
FROM golang:1.18-alpine AS build
WORKDIR $GOPATH/src/github.com/gobench-io/gobench

RUN apk add build-base git python3 curl bash

RUN curl -sL https://unofficial-builds.nodejs.org/download/release/v14.21.3/node-v14.21.3-linux-x64-musl.tar.gz | tar -xz -C /usr/local --strip-components=1 --exclude="README.md" --exclude="LICENSE" --exclude="ChangeLog"

COPY . .

RUN npm i -g yarn
RUN make build-web-ui
RUN make build

# deployment
FROM golang:1.18-alpine

RUN apk add build-base gcc

COPY --from=build $GOPATH/src/github.com/gobench-io/gobench/gobench .

EXPOSE 8080

ENTRYPOINT [ "./gobench" ]
