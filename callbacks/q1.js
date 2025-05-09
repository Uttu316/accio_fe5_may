const sum = (a, b, print) => {
  let ans = a + b;
  print(ans);
};

const print = (value) => {
  console.log(value);
};

sum(1, 2, print);
