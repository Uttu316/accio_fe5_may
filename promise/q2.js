console.log("A");
const p = new Promise((resolve, reject) => {
  //sync task
  console.log("B");

  let timer = parseInt(prompt("Enter time")); // 1000
  setTimeout(() => {
    console.log("E");
    if (timer < 2000) {
      resolve("Done");
    } else {
      reject("Bye");
    }
    console.log("F");
  }, timer);

  console.log("D");
});

console.log("G");
p.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log("Error", e);
});
console.log("H");
