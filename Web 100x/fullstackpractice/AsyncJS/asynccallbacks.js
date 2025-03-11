const fs = require("fs");

function read(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", read); //asynchronously

fs.readFile("b.txt", "utf-8", read); //asynchronously

console.log("Done!");
