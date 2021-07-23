//? Arrays
//* You can add any kind of data: String,number, boolean
//* You can add array in array directly

//* Array can contain all type of data
const names = ["Adam", "John", "Matt", 2, 40, true];
console.log(names);
console.log(names[0]);

//* Array can be updated directly with any type of data
console.log((names[1] = "Marry")); //Name is uptaded
console.log(names);
console.log((names[0] = 2)); //You can assign anything
console.log(names);

//* Array can contain array
const ages = [2, 3, 5];
const names01 = ["hi", 2, true, ages];
console.log(names01);
console.log(names01[3]); //Array can be written
console.log(names01[3][1]);

//? Array Methods
const h1 = document.getElementById("numbersHTML");
const numbers = [0, 5, 2, 3, 4, 1]; //Everything is converted to strin, default is String
numbers.pop(); //Delete the last element
numbers.push("push", "push01"); //Push element/s

numbers.unshift(-1);
numbers.unshift(-2, -4); //Add element/s to first

numbers.shift(); //Delete 1st element

numbers.reverse();

const numbers01 = [1, 3, 2]; //does not sort numbers
numbers.sort();
console.log(numbers01);

const numbers02 = ["a", "c", "b", "A"];
numbers02.sort();
console.log(numbers02);

//? Splice
const spliceHtml = document.getElementById("splice01");
const num = [1, 2, 3];
num.splice(1, 1, "index01", "adding2");

spliceHtml.innerHTML = num;
h1.innerHTML = numbers;

//? Array Methods
const array01 = ["a", "b", "c", "a"];
const array02 = ["A", "B", "C"];

//* Includes();
array01.includes("a");
console.log(array01.includes("a")); //True
console.log(array01.includes("A")); //False, case sensitive

//* Join();//Return string, not array
console.log(array01.join());
console.log(array01.join("/"));
console.log(array01.join(" yes "));

//* toSTring(); //Return String as separated with ","
console.log(array01.toString()); // a,b,c

//* Slice(); // It is like substring();
console.log(array01.slice(2)); // ["c"]
console.log(array01.slice(0, 2));

// * indexOf()
console.log(array01.indexOf("a"));
console.log(array01.indexOf("b"));
console.log(array01.indexOf("X")); // -1, if there is no

//* lastIndexOf()
console.log(array01.lastIndexOf("a"));

//* concat(); // Add the second one to the end of the first one. Return array
//* YOu can add, number,string or array too
const array03 = array01.concat(array02, "hi", 2, ["array", false]);
h1.innerHTML = array03;
