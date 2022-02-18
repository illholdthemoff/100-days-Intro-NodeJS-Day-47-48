// const userName = "moff";
// remember, you CANNOT connect with the dom using NodeJS

// console.log(userName);

const fs = require("fs");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send("<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form>");
}); // localhost:3000/

app.post("/store-user", function(req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

const fileData = fs.readFileSync(filePath); // reads data from the file path
const existingUsers = JSON.parse(fileData); //converts the data into something useful

existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored</h1>");
});

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
