function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }

  return arr2;
}

const users = [
  {
    name: "Krishna",
    age: 19,
    gender: "male",
  },
  {
    name: "Radhey",
    age: 16,
    gender: "female",
  },
  {
    name: "Shyam",
    age: 20,
    gender: "male",
    
  },
];

const ans = solve(users);
console.log(ans);
