let arr = [2, 3, 4, 1, 9, 6];

//arr.forEach((item,index,array)=>{
//   console.log(item)
// })

//Step 1: assign forEach to prototype of Array
//Step 2: assign a function to forEach
//Step 3: take callback as parameter
//Step 4: access the current array using this
//Step 5: loop this array
//Step 6: call callback fn for every iteration
//step 7: pass curr item, index, array in callback as arguments

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    const array = this;

    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };
}

arr.forEach((item, index, array) => {
  console.log(item);
});
