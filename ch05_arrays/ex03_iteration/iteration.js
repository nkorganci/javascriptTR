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

//? Example: Sort the animals
/* const animals = ["cat", "dog", "bird", "fish", "cat"];
const search = prompt("Search the animal").toLowerCase();

const returnA = function (searchs) {
  let count = 0;
  for (let i = 0; i < animals.length; i++) {
    if (search == animals[i]) {
      count++;
    }
  }
  return count;
};
const res = returnA(search);
res == 0
  ? console.log("Could not find")
  : console.log(`The animal ${search} ${res}`); */

//? Example: For of
const addition = [2, 3, -2];
let sum = 0;
for (let i of addition) {
  sum += i;
}
console.log(sum);

const addition1 = [2, 3, -2];
let sum1 = 0;
for (let i in addition1) {
  sum1 += addition1[i];
}
console.log(sum1);

//? Array.forEach(), slower than for or for in, for of
//* it writes all elements of array
let numbers = [2, 3, "Hi"];
numbers.forEach(write);

//* each numbers goes to write function.
function write(persons) {
  console.log(persons);
}

//* 2nd Way, arrow function

numbers.forEach((t) => console.log(t));

//*Example: find the sum of the elements and write it in HTML

//* 1.Way: Classic
let num01 = [2, 4, 5];
let sum01 = 0;
for (let i = 0; i < num01.length; i++) {
  sum01 += num01[i];
}
console.log(sum01);

//* 2.Way: For in

let num02 = [2, 4, 5];
let sum02 = 0;
for (let i in num02) {
  sum02 += num02[i];
}
console.log(sum02);

//* 3.Way: for of
let num03 = [2, 4, 5];
let sum03 = 0;
for (let i of num03) {
  sum03 += i;
}
console.log(sum03);

//* 4.Way , forEach and write it in HTML
let num04 = [2, 4, 6];
let sum04 = 0;

num04.forEach(calculate);

function calculate(x) {
  sum04 += x;
  document.querySelector(".sum").innerHTML = sum04;
}

//* 5.Way arrow funtion and write in HTML

let num05 = [2, 4, 6];
let sum05 = 0;

num05.forEach((t) => (sum05 += t));
console.log(sum05);
document.querySelector(".sum05").innerHTML = `${sum05} TL`;

//* forEach( realValue, index, array);

let num06 = [2, 4, 6];
let sum06 = 0;

num05.forEach((t, i, d) => {
  console.log(`${i}. iteration ${sum06}`);
  sum06 += t;
});

console.log(sum06);
document.querySelector(".sum05").innerHTML = `${sum06} TL`;

//! forEach has no return type, it is void
//* Example: add %10 for each number.
//* Not a good example for this, just for practice. 
let price = [10, 20, 30];
let newPrice = [];
let price01 = price.forEach((t, i) => (newPrice[i] = (t+t/3).toFixed(2)));
console.log(newPrice);
