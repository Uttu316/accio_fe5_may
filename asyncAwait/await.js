function api() {
  return new Promise((res, rej) => {
    let name = prompt("Enter name");
    if (name == "Ajay") {
      res("Hello");
    } else {
      rej("Bye");
    }
  });
}

async function getdata() {
  console.log("A");

  const out = await api();
  console.log("B");
  return out;
}

getdata()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("C");
