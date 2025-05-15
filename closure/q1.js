function parent() {
  let x = 0;
  let y = 1;

  function child() {
    //closure
    console.log(x, y);
  }

  return child;
}

const child = parent();

child();
