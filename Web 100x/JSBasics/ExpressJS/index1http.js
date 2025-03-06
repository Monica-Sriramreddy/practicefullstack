const express = require("express");
const app = express();

//route handlers
// / route
// GET method

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", function (req, res) {
  res.send("Hello World from post endpoint");
});

app.get("/asd", function (req, res) {
  res.send("Hello from the asd endpoiint");
});

app.listen(3000); //which port
