
var biggestValue = function(array) {
  var biggest = 0;
  array.reduce(function(prev,curr,index,array) {
    if (prev > curr) {
      console.log(prev + " is bigger than " + curr);
    }
    else {
      console.log(prev + " is smaller than " + curr);
    }
  });
}

var values = [1,3,4,5,6,30,3,100,40];
console.log(biggestValue(values));
