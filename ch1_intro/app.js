console.log("Hello Javascript");
// console.log("easey")  , comment ctrl /
/* 2nd way of comment */
// console.error("this is an error")
// console.warn("thi is a warning")
//alert("Stop pay attention");

//==> VARIABLE==============================================
/*
var--> is a global variable , do not try to use often.
If you define a var in a scope it is called function scope
const can be assigned at the beginning for non-primitive ones.
const is used often for not to change.
let is local variable.
*/

//-------------->>CONST
var pi =3.14;
console.log(pi);
console.log(typeof pi);

pi="3";
console.log(pi);
console.log(typeof pi);

fname ="Adam";
console.log(typeof fname);//String

fname =12;
console.log(typeof fname);//number

//const and let are new keywords

//const pinum; //Missing initializer, must be initialized
const pinum =3;
//pinum= 4; //Assignment to constant variable, const can not be changed

//?---------------->>LET
/*
1-Let is a block-scope variable
2-Let is only valid in local
*/
let price;
console.log(typeof price);//undefined

//Three methods to write a string
let name1="Hawa";//Double quote
let name2='David';//Single quote
let name3 =`George`;//Back=tick

console.log(name3);
console.log();

let name4=null;
console.log(typeof name4); // null is an object

//?--------->>ARITHMETIC OPERATIONS
let a = 2**3;
console.log(a);

//MOre than one variable
const a1=2;
const b1=3;
let c1 = a1+b1;
console.log(c1);
console.log("price is: ", c1*2)//more than one variable can be written by comma ","

//+ is used for addition and concanation
const a2="adam";
const b2="david";

const c3=3,d3=5;// by using comma you can assign

let d1=3;
let d2=4;
console.log(`d1+d2`, d1+d2);

//--->>backtick ` string ${} `, practical method
const n1="adam";
const age=33;
console.log(`my name is ${n1} and my age is ${age}`);
console.log(`my name is ${n1} 
and my age is ${age}`);//can be used as 2nd way

//e.g.
var x=2;
var y=4;
console.log(`x+y`, x+y);
console.log(`x and y: ${x + y}`);//expression can be done in template literal

//add, substract, multiply, division
x+=2;
y-=2;
console.log(x+y);

//Mod %
console.log(x%3);
x=123;
const c=x%10;
console.log(c);