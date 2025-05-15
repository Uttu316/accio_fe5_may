//currying
//sum(1)(2)(3)(4)(5)(6)(7)()

function sum(x) {
  let o = x;
  return function add(y) {
    if (y === undefined) {
      return o;
    } else {
      o += y;
      return add; // recursive closure
    }
  };
}

const ans = sum(2)(4)(2)(5)(2)(0)(1)();

console.log(ans);
