const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations (stations) {
  const expectedresult = [];

  for (const station of stations) {
    if (station[1] >= 20) {
      if (station[2] === 'community centre' || station[2] === 'school') {
       expectedresult.push(station[0]);}
 
       }
     }
   return expectedresult; 
}
console.log(chooseStations (stations));

  

