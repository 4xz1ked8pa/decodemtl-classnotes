/* Questions */
/*
 * Why put an object in an array? Why not put objects in the array instead.
*/

var people = [
  {name: "Charles", age:30},
  {name: "John", age:30},
  {name: "Jack", age:30},
  {name: "Daniel", age:30}
];
console.log(people.indexOf({name: "John", age: 30})); // This will output: -1;
