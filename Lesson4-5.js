// evaluated to correct in the Codecademy lesson for Lesson 4 (Function Calls as Values), task 5 (Even is not Odd)

var isOdd = function (i) {
  if (i % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}; 
   
var isEven = function (i) {
  return !isOdd(i)
};

console.log(isOdd(3));