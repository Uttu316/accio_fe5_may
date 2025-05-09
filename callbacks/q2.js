function abc(p, q, callback) {
  let x = 2;

  let o = callback(p + x, q) - callback(p, q - x);

  return o;
}

function sum(a, b) {
  return a + b + 2;
}

let ans = abc(4, 5, sum);

console.log(ans);
