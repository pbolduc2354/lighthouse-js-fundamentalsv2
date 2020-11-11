const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...

  let highestScore = 0;
  let index = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if(metric === "redness" && vegetables[i]["redness"] > highestScore) {
      highestScore = vegetables[i]["redness"];
      index = i;
    } else if (metric === "plumpness" && vegetables[i]["plumpness" > highestScore]) {
      highestScore = vegetables[i]["plumpness"];
      index = i;
    }
  }
  console.log(vegetables[index]["submitter"]);
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 11,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)