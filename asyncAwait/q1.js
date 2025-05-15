console.log("A");
const getData = async () => {
  console.log("B");

  return "C";
};

console.log("D");

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("E");
