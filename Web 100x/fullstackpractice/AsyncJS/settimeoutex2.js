function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

setTimeout(timeout, 10000);

console.log("Welcome to VSCode.");

let c = 0;
for (let i = 0; i < 10000; i++) {
  c = c + 1;
}

console.log("Expensive operation done");
