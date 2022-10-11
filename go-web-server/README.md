# Basic Web Server in Go

## Prerequisites

- Go 1.19+ installed
- Web Browser/Postman/cURL to play with the server

## QuickStart

`cd` to [`go-web-server`](.) directory & run

```shell
go run main.go
```

to start http server on [`localhost:8080`](http://localhost:8080)

## Endpoints

- `GET /` - displays [`index.html`](static/index.html) inside [`static`](static/) directory
- `GET /hello` - displays a greeting
- `GET /form.html` - displays [`form.html`](static/form.html) inside [`static`](static/) directory
- `POST /form` - displays post request successful with form values

## Contributors

- [Jayesh Mann](https://github.com/jayeshmann) [Author]
