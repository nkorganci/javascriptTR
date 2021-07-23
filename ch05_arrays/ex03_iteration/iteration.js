const coordinates = [10, -10, 20, -3, -2];
let countP = 0;
let countN = 0;
for (let index = 0; index < coordinates.length; index++) {
  if (coordinates[index] <= 0) {
    countN++;
  } else {
    countP++;
  }
}

//* For In can be used in arrays and objects
for (let i in coordinates) {
  coordinates[i] < 0 ? countN++ : countP++;
}

console.log(countN, countP);
console.log(`positive ${countP}, negetive ${countN}`);

//* For Of Arrays, Strings, Maps, can be use in all
