FROM golang:latest

RUN go install github.com/pressly/goose/v3/cmd/goose@latest
RUN go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest    

WORKDIR /app

COPY ./.env ./.env

COPY . .

RUN chmod +x migrate.sh

RUN sqlc generate

RUN go build

EXPOSE 8080

CMD ["/bin/bash", "-c", "./migrate.sh && ./backend"]
