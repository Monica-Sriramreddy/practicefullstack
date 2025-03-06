const express = require("express");
const app = express();

let requestCount = 0;

app.get("/add", function (req, res) {
  requestCount = requestCount + 1;
  console.log("Total number of requests = " + requestCount);
  //console.log(`Total number of requests = ${requestCount}`);
  //main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a - b,
  });
});

app.get("/multiply", function (req, res) {
  requestCount = requestCount + 1;
  console.log("Total number of requests = " + requestCount);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b,
  });
});

app.listen(3001);
