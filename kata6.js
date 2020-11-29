const whereCanIPark = function (spots, vehicule) {

  let row = 0;
  let position = []

  if (vehicule === "regular") {
    for (let c = 0; c < spots.length; c++) {
      let colums = 0;
      for (let r = 0; r < spots[c]["length"]; r++) {
        if (spots[c][r] === "R") {
          position.push(colums, row);
          return position ;
        } else {
          colums +=1
        }
      }
      row += 1 ; 
    }
    return false
  } else if (vehicule === "small") {
    for (let c = 0; c < spots.length; c++) {
      let colums = 0;
      for (let r = 0; r < spots[c]["length"]; r++) {
        if (spots[c][r] === "R" || spots[c][r] === "S") {
          position.push(colums, row);
          return position ;
        } else {
          colums +=1
        }
      }
      row += 1 ; 
    }
    return false
  } else if (vehicule === "motorcycle") {
    for (let c = 0; c < spots.length; c++) {
      let colums = 0;
      for (let r = 0; r < spots[c]["length"]; r++) {
        if (spots[c][r] === "R" || spots[c][r] === "S" || spots[c][r] === "M") {
          position.push(colums, row);
          return position ;
        } else {
          colums +=1
        }
      }
      row += 1 ; 
    }
    return false
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))