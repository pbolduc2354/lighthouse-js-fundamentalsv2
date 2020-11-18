const sumLargestNumbers = function(data) {
let largestNumb = [0,0];
for (let i = 0; i < data.length; i++){
  console.log(i)
  if (data[i] > largestNumb[0]) {
    largestNumb.splice(0,1,data[i]);
  }
}

for (let j = 0; j < data.length; j++) {
  if (data[j] > largestNumb[1] && data[j] !== largestNumb[0]) {
    largestNumb.splice(1,1,data[j]);
  }
}
return largestNumb[0] + largestNumb[1];
};

console.log(sumLargestNumbers([1,10]));
console.log(sumLargestNumbers([1,2,3]));
console.log(sumLargestNumbers([10,4,34,6,92,2]));