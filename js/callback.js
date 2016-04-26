setTimeout(function() {
  console.log("5 secs have passed");
  setTimeout(function() {
    console.log("10 secs have passed");
  },5000);
}, 5000);
