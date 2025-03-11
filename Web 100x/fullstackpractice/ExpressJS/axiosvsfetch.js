const axios = require("axios");
async function main() {
  const response = await fetch("https: ");
  const json = await response.json();
  console.log(json.todos.length);
}

async function main() {
  const response = await axios.get("https: ");
  console.log(response.data.todos.length);
}

main();
