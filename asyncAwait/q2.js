function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("A");
      res("B");
    }, 2000);
  });
}

console.log("D");

async function getdata() {
  console.log("C");

  const out = await api();
  console.log("E");
  return out;
}

console.log("F");

getdata()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("C");
