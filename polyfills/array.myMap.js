let arr = [2, 3, 4, 1, 9, 6];

//cnost newArray = arr.map((item,index,array)=>{
//   console.log(item)
//return item+2
// })

//Step 1: assign myMap to prototype of Array
//Step 2: assign a function to myMap
//Step 3: take callback as parameter
//Step 4: access the current array using this
//Step 5: loop this array
//Step 6: call callback fn for every iteration
//step 7: pass curr item, index, array in callback as arguments
//step 8: store return value of callback in an output array
//step 9: return the output array

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const array = this;

    const result = [];

    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }

    return result;
  };
}

const newArray = arr.myMap((item, index, array) => {
  //   console.log(item)
  return item + 2;
});
console.log(newArray);
