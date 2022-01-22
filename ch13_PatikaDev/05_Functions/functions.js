// TODO 1- NAMED FUNCTIONS

//  * Global variables can be used anywhere
let a = 2;
let b = 3;

// ! 1A- Function with name and without parameter
function f1() {
  console.log(a + b);
}

f1();

// ! 1B- Function with name and parameter
//*EXAMPLE-1
function f2(a, b) {
  //* any kind of parameter
  console.log(a + b);
}
f2(22, 44);


//*EXAMPLE-2

let fname="Bera"
function myfun(fname = "") {
  //! we can assing initial value
  console.log(`My first name is ${fname}`);
}
myfun("Enver");

//TODO 2- ANONYMOUS FUNCTIONS

let cal = function (a, b) {
  return a * b;
};
console.log("cal " + cal(2, 2));

// * We can call a function inside of another function
//! Example-1
let cal1 = function () {
  return cal(3, 3);
};

console.log("cal1 " + cal1()); //* variable should be called as a function call()

//TODO 3- CALLBACK FUNCTIONS
// ! Callbacks Example 1

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML =some;
// }

// function myFirst(){
//     myDisplayer("Hello");
// }

// function mySecond(){
//     myDisplayer("Goodbye")
// }

// myFirst();
// mySecond();

//! Callbacks Example 2

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

//! Callback Function and asynchronous function
function printScreen1() {
  console.log("First Screen");
}

function printScreen2() {
  setTimeout(function () {
    console.log("Second screen");
  }, 3000);
}

function printScreen3() {
  console.log("Third Screen");
}
printScreen1();
printScreen2();
printScreen3();

//! Function Decleration
function msg(name, lname) {
  // alert(`Hi ${name} ${lname}`)
}
//
msg("Enver", "Bera");

// TODO - 4 ARROW FUNCTIONS

//* EXAMPLE: One parameter
let add = (x) => x * x;
console.log(add(5));

//* EXAMPLE: More than one parameter
let add1 = (x, y) => {
  let z = x + y;
  return z;
};
console.log(add1(3, 5));

//* EXAMPLE: 3

let fullName1 = (fName) =>{
    console.log(`Name: ${fName}`);
    return "return"
}
fullName1("Naci")
console.log(fullName1("Kerem"));

// TODO - 5 RECURSION
//* Recursion is a process of calling itself. A function that calls itself is called a recursive function.
//* Syntax

// function recurse(){
//     recurse();
// }

// recurse();

// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

// TODO - 6 NESTED FUNCTIONS

function program(bootcamp, organization) {
  //nested assistant function
  const allProgram = () => bootcamp + " " + organization;
  console.log("started: " + allProgram());
  console.log("Ended: " + allProgram());
}

program("A", "B");

// TODO - 7 RETURN
//*Return stop the function and return a value

function f3(fname, lname){
    let fullName=`My full name is ${fname}  ${lname}`
    return fullName;
}

let fullName=f3("Enver","Bera");
console.log(fullName);


// TODO- 8 THIS key word

let movie = { 

    name: "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name is La la land