// how many ways we can return promise from a function

// function getData(){
//     return new Promise((resolve,reject)=>{
//         resolve('Hello')
//     })
// }

// function getData(){
//     return Promise.reject("Hello")
// }

async function getData() {
  console.log("Hey");
}

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Error", e);
  });
