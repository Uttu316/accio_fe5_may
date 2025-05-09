let arr = [2, 3, 4, 1, 9, 6];

Array.prototype.even = function () {
  const array = this;

  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      output.push(array[i]);
    }
  }
  console.log(output);
};

arr.even();
