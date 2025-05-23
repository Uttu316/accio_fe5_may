import { useState } from "react";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1); //async
    console.log("Add fn", x); //0
  };

  const onSub = () => {
    setX((currX) => {
      return currX - 1;
    }); // pass a callback function which gives current state as parameter and return the latest value of x variable from your callback
    //setX(x-1) // pass latest value to set the x variable
    console.log("Sub fn", x);
  };

  console.log("Counter Update", x);
  return (
    <div>
      <h2>Count {x}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onSub}>Sub</button>
    </div>
  );
};
export default Counter;
