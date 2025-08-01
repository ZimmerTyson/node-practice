// require express library

const express = require("express");
const path = require("path");
const PORT = 8888;

const app = express(); // initializing express inside of the app variable
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

// ** Health check to see if server is running

app.get("/ping", function(req, res) {
  // console.log("req =", req.ip);
  // console.log("req =", req.headers);
  return res.send("pong");
});

app.listen(PORT, function() {
  console.log("server running at port:", PORT);
});