const p = new Promise((resolve, reject) => {
  //sync task

  let timer = parseInt(prompt("Enter time"));
  setTimeout(() => {
    console.log("Async Operation");
    if (timer < 2000) {
      resolve("Done");
    } else {
      reject("Bye");
    }
  }, timer);
});

p.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log("Error", e);
});
