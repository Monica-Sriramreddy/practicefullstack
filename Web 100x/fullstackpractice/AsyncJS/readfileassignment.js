const fs = require("fs");
const data = fs.readFileSync("a.txt", "utf8"); //synchronously
console.log(data);

const data1 = fs.readFileSync("b.txt", "utf8"); //synchronously
console.log(data1);
