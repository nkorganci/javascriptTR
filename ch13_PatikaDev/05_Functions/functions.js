// TODO 1- NAMED FUNCTIONS

//  * Global variables can be used anywhere
let a=2;
let b=3;

// ! 1A- Function with name and without parameter
function f1(){
    console.log(a+b);
}

f1();

// ! 1B- Function with name and parameter
    function f2(a,b) { //* any kind of parameter
        console.log(a+b);
    }
f2(22,44)

//TODO 2- ANONYMOUS FUNCTIONS

let cal = function(a,b){
    return a*b;
}
console.log("cal " + cal(2,2));

// * We can call a function inside of another function
//! Example-1
let cal1 = function(){
    return cal(3,3);
}

console.log("cal1 " + cal1()); //* variable should be called as a function call()

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

function myDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

function myCalculator(num1,num2){
    let sum=num1+num2;
    return sum;
}

let result = myCalculator(5,5);
myDisplayer(result);

//! Callback Function and asynchronous function
function printScreen1 (){
    console.log("First Screen");
}

 function printScreen2 (){
   setTimeout(function(){
console.log("Second screen")  
}, 3000);
}

function printScreen3 (){
    console.log("Third Screen");
}
printScreen1();
printScreen2();
printScreen3();

//! Function Decleration
function msg(name, lname){
    // alert(`Hi ${name} ${lname}`)
}
// 
msg("Enver", "Bera")

// TODO - ARROW FUNCTIONS

//* One parameter
let add = x=>x*x;
console.log(add(5));

//* More than one parameter
let add1=(x,y)=> {
    let z=x+y;
    return z;
}
console.log(add1(3,5));



// TODO - RECURSION
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


// TODO - NESTED FUNCTIONS

function program(bootcamp,organization){
    //nested assistant function
    const allProgram = ()=> bootcamp + " " + organization
    console.log("started: " + allProgram());
    console.log(("Ended: " + allProgram()));
}

program("A","B")