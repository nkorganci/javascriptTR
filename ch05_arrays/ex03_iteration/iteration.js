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
let price01 = price.forEach((t, i) => (newPrice[i] = (t + t / 3).toFixed(2)));
console.log(newPrice);

//? ========== MAP METHODS, IT has return, not like forEach=============
//* Example: Multiply by 5
const num07 = [1, 2, 3];
const num07a = num07.map((t) => 5 * t);
console.log(num07a);

//* Example: Make it upper cases
const nam01 = ["hi", "david", "Mat"];
const nam02 = nam01.map((t) => t.toUpperCase());
const nam03 = nam02.map((t) => console.log(t));

//* Map and forEach
nam01.map((t) => t.toUpperCase()).forEach((t) => console.log(t));

//* Example: Euro Dollar parameter calculator
prices = [10, 20, 33];

/* const euro = document.querySelector(".euro");
const dolar = document.querySelector(".dolar");

const eurof = document.querySelector(".eurof");
const dolarf= document.querySelector(".dolarf");


dolar.onchange=function(){
dolarf.innerHTML=prices.map(t=>Math.round(t/dolar.value));
} */

//* Example: change in price
const changedP = prices.map((v, i) => {
  if (v > 20) {
    return `${i + 1}. product new price: ${v * 1.1}<br>`;
  } else {
    return `${i + 1}. product new price: ${v * 1.1}<br>`;
  }
});
console.log(changedP);

document.querySelector(".changedP").innerHTML = changedP;

//? filter-> does not change anythings, just filters, like map(), return filtered ones
const filterM = prices.filter((t) => t < 20);
console.log(filterM);

//? Sort-> we need to use 2 parameters
const sort01 = ["ea", "ca", "bad"];
const sort001 = sort01.sort();
console.log(sort001);
console.log(sort01.sort());

const sort02 = [1, 2, 0];
const sort002 = sort02.sort();
console.log(sort002);
console.log(sort02.sort((a, b) => b - a));

const sort03 = ["a", 1, "b", 2];
console.log(sort03.sort());

//? Pipeline-> using more than one arrow function
//* Example: if the salary is less than 60, increase price by 10,otherwise 20;
const salary = [20, 40, 60, 80];
const salaryH = salary
  .filter((t) => t < 60)
  .map((t) => t * 1.1)
  .forEach((t) => console.log(t));

//* Example:
const names01 = ["Adam", "Hawa", "Mariam"];
const names01a = names01
  .filter((t) => t.startsWith("H") || t.startsWith("A"))
  .forEach((t) => console.log(t));

//* 1st Way: by function
const findA = (h) => {
  const upperc = h.toUpperCase();
  names01b = names01
    .filter((t) => t.startsWith(upperc))
    .forEach((t) => console.log(t));
};

findA("H");

//? Reduce: return a single value, does not change original array
//* Reduce(x, y)=> x is total value, y is the one in an array
const reduce01 = [1, 3, 3];
const r01 = reduce01.reduce((x, y) => x + y, 0); // 0 is initial value of x
const r02 = reduce01.reduce((x, y) => x * y, 1);
console.log(r01, r02);

//* Reduce(x,y,i)=> with index parameter
const threeP = [2, 4, 5, 6];
const th01 = threeP.reduce((x, y, i) => {
  console.log(`${i}.Iteration : ${x}`);
  return x + y;
});

console.log(th01);

//* Example: salary in html and javascript
const salary = [3, 5, 7, 9, 11];
const list = document.createElement("ul");
list.className="list";
document.querySelector(".list-div").appendChild(list);
