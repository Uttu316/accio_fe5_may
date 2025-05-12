const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

p.then((v) => {
  console.log(v);
  return v + 2;
})
  .then((v) => {
    console.log(v);
    throw v + 3;
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Errror", e);
  });
