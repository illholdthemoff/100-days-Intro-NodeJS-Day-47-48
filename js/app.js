// const userName = "moff";
// remember, you CANNOT connect with the dom using NodeJS

// console.log(userName);

const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
}); // localhost:3000/

app.listen(3000);

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     "<h1>" + new Date().toISOString() + "</h1>";
//   }
// }
// localhost:3000/currenttime
// localhost:3000

// const server = http.createServer(handleRequest);

// server.listen(3000);

// amazon.com => sends request to amazon server
// amazon.com:80 (or 443) these are the default ports exposed by all web servers to handle incoming traffic. The above basically is listening for a port. We use 3000 while developing becuase it is uncommonly used for other things, otherwise we would use 80 or 443
