/* Questions */
/*
 * Why put an object in an array? Why not put objects in the array instead.
 * Can you use indexOf for an object?
*/

var people = [
  {name: "Charles", age:19},
  {name: "John", age:70},
  {name: "Jack", age:20},
  {name: "Daniel", age:15}
];
//console.log(people.indexOf({name: "John", age: 30})); // This will output: -1;
//console.log(people.length);


// Check if the person is in the array
var checkForName = function(personName) {
  people.forEach(function(personName) {
    if (personName.name === "Jack") {
      console.log("Jack's age is: " + personName.age);
    }
  });
}


var index = {};
var person = {
  "id": "1",
  "firstName": "Donald",
  "lastName": "Duck",
  "email": "don@disney.com"
};
if (!index[person.firstName]) {
  index[person.firstName] = [];
}
index[person.firstName].push(person);

/* with reduce */
var index = people.reduce(function(index, person) {
  if (!index[person.firstName]) {
    index[person.firstName] = [];
  }
  index[person.firstName].push(person);
  console.log(index);
}, {});
