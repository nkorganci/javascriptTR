// console.log("Hello Javascript, NOT INLINE JS");
//clg + enter= console.log();

// console.log("easy")  , comment ctrl /, //, /* */

//?===> ALERTS You can show error by 3 ways
/*console.error("this is an error")
console.warn("thi is a warning")
alert("Stop pay attention");//Gives information to client */

//?===>DATA TYPES
/*
String: String and Char
Number: All tyeps, integer, decimal...
Undefined: var n1; not assigned
Null:
Symbol: Unique values
BigInt: Huge numbers
*/

//? VAR, LET, CONST,
/*variable should 
start with a "letter" or " _", 
can not have symbol or special characters
case sensitive
should be camelCase
*/

/*
*var--> is a global variable , do not try to use often.
*If you define a var in a scope it is called function scope

const can be assigned at the beginning for non-primitive ones.
const is used often for not to change.

let is local variable.
*/

//?===>VAR
/* var pi =3.14;
console.log(pi);
console.log(typeof pi);

pi="3";
console.log(pi);
console.log(typeof pi);

pi=true;
console.log(pi);
console.log(typeof pi);

fname ="Adam";// var fname ="Adam"; //Are same
console.log(typeof fname);//String

fname =12;
console.log(typeof fname);//number */

//? CONST and LET are in MODERN JAVASCRIPT,

//*Missing initializer, must be initialized
//const pinum;

// const pinum =3;
// pinum= 4;

/*
 *CONST can be also a block-scope if it is defined in a scope
 *Assignment to constant variable, const can not be changed(except for non-primitives)
 *const must have initial value.
 */

//?=====>>LET====

/*
 *1-Let is a block-scope variable. It is valid only its own block.
 *2-Let is only valid in local
 *Var is a global scope.
 */

/* let price;
console.log(typeof price); //Undefined
price = 4.4;
console.log(price);
console.log(typeof price);
 */

//? String can be written by 3 ways
/* let name1="Adam1";
let name2='Adam2';
let name3=`Adam3`;// More flexible, in modern JS

console.log(name1);
console.log(name2);
console.log(name3); */

//?===> NULL============
/* const lan=null;
console.log(lan);
console.log(typeof lan);//Object */

//?====== OPERATORS ======
/* const f1=40;
const f2=2;
const f3=5;
const sum=f1+f2+f3; */
//sum++;// can not be changed

//*Comma is used to write more than one variable.
// console.log("total price= ",sum,", f1 price=", f1);

//* "+" is used to add number or strings.
//* const m4=5; m5=7;, m6=8;  More than one variable can be defined
/* const m1=5;
const m2="5";
const m3=4;
console.log(m1+m2+m3); */

//? Template Literals: Backtick  ` `, `String:{variable} string, ES6
//*METHOD(Java)=FUNCTION(JavaScript)

//*Example1
/* const a1="Adam";
const age1=44;
console.log(`My name is ${a1}, age is ${age1}`);//*1st Way which is great, practical
console.log("My name is " + a1 + "," + " My age is " + age1)// 2nd Way */

//*Example2
/* const c1="Adam";
const c2=1990;
const c3=2016;
const age= c3-c2;
console.log("My age is: " + c3-c2);//! NaN= Not a number error
console.log("My age is: " +(c3-c2));
console.log(`My age is ${c3-c2}`);//*Expression can be used in Template literal */

//? Exponential
/* const d1=3;
const d2=2;
const d3=3**2;
console.log(d3); */

//? Math and Mod
/* Math.floor();
Math.round();
Math.ceil(); */

/* const e1=16;
const e2=88;
console.log(Math.floor(e1/10));
console.log(Math.ceil(e1/10));
console.log(Math.round(e1/10));
console.log(Math.max(e1/10,2,4));
console.log(Math.min(e1/10,1)); */

//? Comparison Operators "==",<,>= compare only value, "===" ,"!==" compare both value and type
/* const f1=4;
const f2="4";
console.log(f1===f2);//False
console.log(f1==f2);//True
console.log(f1>f2); */

//? Logical Operators: 0, flase, null, undefined, NaN==>false, all others "true"

/* const g1=true;
const g2=null;

console.log(g1||g2);//true
console.log(g1&&g2);//null

console.log(g2 || g1);//true
console.log(g2 && g1);//null */
//* &&  boolean, return first false value
/* console.log(null&&true&&true);
console.log(true&&false&&null);
 */

//? ========= TERNARY ===========
//* "+" or "Number" should be written to convert STRING to NUMBER
/* console.log("hi");
const age2 = prompt("write your age");
const age3 = +prompt("write your salary"); //Typeof: Number
const age3 = Number(prompt("write your salary")); //Typeof: Number
console.log(typeof age2); //Typeof: String
console.log("Your age is: " + age2); */

//? Example:

const age5=Number(prompt("Enter your age to check ID"));
const name5=prompt("Your name")

if(age5>18){
    console.log("you can drive");
}else{
    console.log("you can not drive");
}

age5>18? console.log(`${name5} can drive`): console.log(`${name5} can not drive`);

const result= age5>18?`${name5} can`:`${name5} can not`;
console.log(result);