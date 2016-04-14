/* exposes how functions see variables */
function fun1() {
  var someVar1 = "super secret";
  function fun2() {
    console.log("The value of someVar is: " + someVar1);
  }
  return fun2();
}
console.log(fun1());

/* other example */
function adder(firstNumberToBeAdded) {
  return function(secondNumberToBeAdded) {
    return firstNumberToBeAdded + secondNumberToBeAdded;
  }
}
var addTen  = adder(10);
addTen(20);
addTen(32);
var increment = adder(1);
increment(41);

/* closure: a function and an environment (whats the environment?) */
