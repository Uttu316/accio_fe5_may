const myPromise = new Promise((res, rej) => {
  const num = parseInt(prompt("Enter value"));

  if (num % 2 == 0) {
    res(num * 2);
  } else {
    rej(num - 2);
  }
});

myPromise
  .then((value) => value + 1)
  .then((value) => value + 2)
  .then((value) => value + 3)
  .then((value) => value + 4)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
