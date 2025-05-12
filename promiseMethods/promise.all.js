const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
});

const p = Promise.all([p2, p1, p3]);

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log("Errror", err);
});
