function sum(x) {
  let o = x;
  return function (y) {
    o += y;
    console.log(o);
  };
}

const add = sum(3); // what is return value of sum(): function

add(4);

add(3);

add(2);
