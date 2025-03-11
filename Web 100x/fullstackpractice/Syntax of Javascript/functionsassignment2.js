function canVote(age) {
  if (age > 18) {
    // 19 > 18 T and 15 > 18 F
    return true;
  } else {
    return false;
  }
}

let message = canVote(19);
let message1 = canVote(15);

console.log(message);
console.log(message1);
