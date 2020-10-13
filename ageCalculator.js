function ageCalculator (name, yearOfBirth, currentYear) {
  let year = currentYear - yearOfBirth
  return name + " is " + year + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
