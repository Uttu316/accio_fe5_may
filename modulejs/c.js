var xyz = 5;

export function sayHello() {
  console.log("Hello");
}

function printHello() {
  let el = document.createElement("h2");
  el.innerHTML = "Lets Learn";
  document.body.append(el);
}

export default printHello;
