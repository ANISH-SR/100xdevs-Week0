let arr2 = [];

function nothing(arr) {
  arr.filter(function (value) {
    if (value.age > 20 || value.gender == "male") {
      console.log(value);
    }
  })

}

let arr = [{
  name: "Hkirat",
  age: 32,
  gender: "male",
}, {
  name: "Anish",
  age: 27,
  gender: "male",
}, {

  name: "tris",
  age: 21,
  gender: "female",
}

];


nothing(arr);
