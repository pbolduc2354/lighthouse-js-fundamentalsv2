const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    //console.log("even");
    for (let i = 0; i < values.length; i++) {
      //console.log(values)
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === "odd") {
    //console.log("odd");
    for (let j = 0; j < values.length; j++) {
      if (values[j] % 2 !== 0) {
        sum += values[j];
      }
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "even"));