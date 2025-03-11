const express = require("express");
const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log("Total number of requests = " + requestCount);
  //console.log(`Total number of requests = ${requestCount}`);
  next();
}

function realSumHandler(req, res) {
  //main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
}

app.get("/add", requestIncreaser, realSumHandler);

// app.get("/add", requestIncreaser, function (req, res) {
//   //main logic
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     answer: a + b,
//   });
// });

// app.get("/multiply", requestIncreaser, function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     answer: a * b,
//   });
// });

app.listen(3001);
