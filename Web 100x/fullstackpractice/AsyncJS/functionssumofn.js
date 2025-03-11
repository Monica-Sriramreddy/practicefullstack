function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans = sum(10);
console.log(ans);
const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
