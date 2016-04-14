/* exposes how functions see variables */

function fun1() {
  var someVar1 = "super secret";
  function fun2() {
    console.log("The value of someVar is: " + someVar1);
    alert("get");
  }
  return fun2;
}
console.log(fun1());
