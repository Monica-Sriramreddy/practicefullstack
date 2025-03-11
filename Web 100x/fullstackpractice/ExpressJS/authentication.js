const express = require("express");
const app = express();
app.use(express.json());

const users = [];

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "A",
    "B",
    "C",
    "D",
    "E",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5" / n,
  ];

  let token = "";
  for (leti = 0; i < 16; i++) {
    token += options[Math.floor(math.random() * options.length)];
  }
  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  console.log("users =" + users);

  res.json({
    message: "you are signed in",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.json({
      message: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.listen(3000);
