let user = {
  name: "ABC",
  age: 23,
  getAge: function (v, x) {
    console.log(this.age, v + x);
  }
};

const emp = {
  name: "XYZ",
  age: 43
};

user.getAge.call(emp, 12, 13); // first argument will always be this value and then pass functions arguments

const pm = {
  name: "Modi",
  age: 65
};

user.getAge.apply(pm, [5, 2]); // // first argument will always be this value and then pass functions arguments in an array
