// const userName = "moff";
// remember, you CANNOT connect with the dom using NodeJS

// console.log(userName);

const fs = require("fs");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime -- what this does is if you are on the curenttime page it will display a timestamp of that current moment

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name: </label><input type='text' name='username'><button>Submit</button></form>"
  );
}); // localhost:3000/ -- what this does is if you are on the basic page, it will prompt you to add your name with a submit

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath); // reads data from the file path
  const existingUsers = JSON.parse(fileData); //converts the data into something useful

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>"; //initially defines responseData as an opening unordered lsit bracket

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>"; //appends our array item user from existingUsers with li brackets to make it 1. a string and 2. a list item
  }

  responseData += "</ul>"; // once the looping through existingUsers is done we append the closing ul bracket to end the list

  res.send(responseData); //and then we spit out the list
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
