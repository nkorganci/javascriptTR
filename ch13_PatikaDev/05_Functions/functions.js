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