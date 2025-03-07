const express = require("express");
const app = express();
//logs the method, timestamp and the url

function loggermiddleware(req, res, next) {
  console.log("The method is " + req.method);
  console.log("The host is " + req.hostname);
  console.log("The route is " + req.url);
  console.log(new Date());
  next();
}
app.use(loggermiddleware);

app.get("/add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a - b,
  });
});

app.listen(3000);
