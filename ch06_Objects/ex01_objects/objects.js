//! ============  OBJECTS ============
//* Arrays are structured.
//* If array is nested, difficult to reach. Better to use OBJECTS

//* Objects use property-value structure is used.

//? Creation of an object, "Object Literal" method, jS is not class based, it is PROTOTYPE-BASED.
//* Not suggested to use as OOP
const human = {
  namef: "Adam",
  namel: "Ohio",
  age: 30,
  languages: ["Java", "js", "c++"],
};
console.log(human);

//* Reaching a property,
//*1st Way: .notation
console.log(human.age);

// * 2nd Way: [], only one property
console.log(human["namef"]);

//* Combination
const name1 = "My Name";
console.log(`${name1} ${human.namef} my age is ${human["age"]}`);

/* //* Ask user for information, promt return string. No need to write ""
//* 1.Way
const learn = prompt("What do you want to learn?");
console.log(human[learn]);

//* 2.Way, to check entered information is correct or not
if (human[learn]) {
  console.log("yes " + human[learn]);
} else {
  console.log("Type correctly");
} */

//? Adding new value to object
human.country = "Usa";
human.color = "red";
human["length"] = 2.3;
console.log(human);

//! ================= OBJECT METHODS ===================
//* Arrow functions are not a classic objects, you can not use this in arrow function
const person = {
  nam: "Nesibe",
  na: "Meryem",
  birth: 2012,
  job: "Teacher",
  tool: "computer",
  ageCalculate: function () {
    console.log(this);
    return new Date().getFullYear() - this.birth;
  },
  summary: function () {
    return `Summary ${this.birth}  ${this.ageCalculate()}`;
  },
};

const date = new Date();

console.log(person.ageCalculate());

console.log(person.summary());

//! OBJECT ITERATION EXAMPLES
//* Objects in Array
const person01 = [
  { nam: "Nesibe", na: "Meryem", birth: 2012, job: "Teacher" },

  { nam: "Nesibe1", na: "Meryem1", birth: 2013, job: "Teacher" },
  { nam: "Nesibe1", na: "Meryem1", birth: 2013, job: "Teacher1" },
];

console.log(person01);

//* Example 1: write the name of persons in array
person01.forEach((x) => console.log(x.nam));

//* Example 2: increase the birth year by one for all
const ages01 = person01.map((x) => x.birth + 1);
console.log(ages01);

//* Example 3: All names upperCase and birth+5 should be in new object
const upperC = person01.map((x) => {
  return {
    nam: x.nam.toUpperCase(),
    birth: x.birth + 5,
  };
});

console.log(upperC);

//* Example 4: Write new array whose job is teacher
const teac = person01.filter((x) => x.job == "Teacher");
console.log(teac);

//* Example 5: Write an birth and job array whose job is teacher
const teac01 = person01
  .filter((x) => x.job == "Teacher")
  .map((x) => {
    return {
      na: x.na,
      birth: x.birth,
    };
  });
console.log(teac01);

//* Example 6: Find the average of ages
const av=person01.reduce((x,y)=>x+y.birth, 0)/person01.length;
console.log(av);
