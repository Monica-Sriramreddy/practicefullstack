function canVote(age) {
  if (age > 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
}

canVote(19);
canVote(15);
