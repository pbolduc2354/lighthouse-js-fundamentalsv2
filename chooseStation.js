const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
  let validStation = [];
  for (let station of stations){
    if (station[1] >= 20 && (station[2] === "school" || station [2] === "community centre")) {
      validStation.push(station[0]);
    }
  }
  return validStation;
}


chooseStations(stations);