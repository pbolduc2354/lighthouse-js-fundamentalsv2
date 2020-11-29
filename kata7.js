const checkAir = function (samples, threshold) {
  let result = 0; 

  for (sample of samples) {
    //console.log(sample)
    if (sample === "dirty") {
      result += 1;
    }
  }
  if(result/samples.length >= threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }
};

console.log(checkAir(
  ['clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))