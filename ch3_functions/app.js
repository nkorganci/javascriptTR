// //-->>Function Decleration

// //1-Function without parameter
// function write( ){
//     console.log("my 1st function");
// }

// write();// Calling a function

// //2-Function with parameter
// // NOTE: In JAVA functions belongs to a class or interface but in javascript they are independent.

// function write1(fname,age){
//     console.log(`name: ${fname}, age ${age}`);

// }

// write1("adam",22);
// write1("John",25);

// //3-Function with return

// function return1(age){
//     return age +2;

// }
// //alert(`your age is ${return1(3)}`);
// console.log(return1(2));

// //Example, odd or even
// //1st Way
// let a;
// function oddEven(){
// a=prompt("write a number");
// if(a%2==0){
//     console.log(`${a} is even`);
// }else{
//     console.log(`${a} is odd`)
// }
// }

// oddEven();

//2nd Way
// let c=prompt("enter a number");
// function oddEven1(c){
//     return c%2==0? `${c} is even`:`${c} is odd`;
// }

// console.log(oddEven1(c));

//3rd Way, function can be assigned to a variable, function has no name, variable name ==function name, used more often

var oddEven2 = function(number){
return number%2? "odd":"even";

}

console.log(oddEven2(2));

// 4th Way Arrow

//4c
const g =(x)=>console.log(x);// has only one function,it has automatic return functin

//4a
function g1(x){
    console.log(x);
}

//4b
const g2= function(x){
    console.log(x)
}
//Example
const g3 =(x,y)=>x+y;//invoke
console.log(g3(2,4));//invoke

//Example
const g4 =(x)=>x%2==0?"even":"odd";
console.log(g4(3));