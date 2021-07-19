console.log("Hello Javascript, NOT INLINE JS");
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
var--> is a global variable , do not try to use often.
If you define a var in a scope it is called function scope
const can be assigned at the beginning for non-primitive ones.
const is used often for not to change.
let is local variable.
*/

//?===>CONST
var pi =3.14;
console.log(pi);
console.log(typeof pi);

pi="3";
console.log(pi);
console.log(typeof pi);

pi=true;
console.log(pi);
console.log(typeof pi);






// fname ="Adam";
// console.log(typeof fname);//String

// fname =12;
// console.log(typeof fname);//number

// //const and let are new keywords

// //const pinum; //Missing initializer, must be initialized
// const pinum =3;
// //pinum= 4; //Assignment to constant variable, const can not be changed

// //?---------------->>LET
// /*
// 1-Let is a block-scope variable
// 2-Let is only valid in local
// */
// let price;
// console.log(typeof price);//undefined

// //Three methods to write a string
// let name1="Hawa";//Double quote
// let name2='David';//Single quote
// let name3 =`George`;//Back=tick

// console.log(name3);
// console.log();

// let name4=null;
// console.log(typeof name4); // null is an object

// //?--------->>ARITHMETIC OPERATIONS
// let a = 2**3;
// console.log(a);

// //MOre than one variable
// const a1=2;
// const b1=3;
// let c1 = a1+b1;
// console.log(c1);
// console.log("price is: ", c1*2)//more than one variable can be written by comma ","

// //+ is used for addition and concanation
// const a2="adam";
// const b2="david";

// const c3=3,d3=5;// by using comma you can assign

// let d1=3;
// let d2=4;
// console.log(`d1+d2`, d1+d2);

// //--->>backtick ` string ${} `, practical method
// const n1="adam";
// const age=33;
// console.log(`my name is ${n1} and my age is ${age}`);
// console.log(`my name is ${n1}
// and my age is ${age}`);//can be used as 2nd way

// //e.g.
// var x=2;
// var y=4;
// console.log(`x+y`, x+y);
// console.log(`x and y: ${x + y}`);//expression can be done in template literal

// //add, substract, multiply, division
// x+=2;
// y-=2;
// console.log(x+y);

// //Mod %
// console.log(x%3);
// x=123;
// const c=x%10;
// console.log(c);

// //Math.floor, math.ceil, math.round
// const d = Math.floor(x/10)%10;
// console.log(d);//2nd digit

// const e= Math.floor(x/100);
// console.log(e)

// //COMPARISONS, ===(compare both value and type) and ==(compare only values)

// x=2;
// y=2;
// console.log(x==y);//true

// x=2;
// y="2";
// console.log(x===y);//false

// //>, <, =>...checks only values.
// console.log(x>=y)

// //Values accepted as FALSE: 0, FALSE, NULL, undefined, "", NaN
// //The others are accepted as TRUE
// console.log(x==y&&x!=y);//last value decide the result
// x=null;
// y=true;// y can be 2 which is accepted as true
// console.log(x&&y);//null, 1st false value will be returned
// console.log(x||y);

//-->TERNARY-----------------------------------------
// const age =prompt("enter your age");//Like a scanner
// console.log('age:', age);
// console.log(typeof age);// default accepted as string

// const age1 =+prompt("enter your age");//Like a scanner
// console.log('age:', age1);
// console.log(typeof age1);// Number
// const name1=prompt("Enter your name")
// const age2 =Number(prompt("enter your age"));//Number class is used
// console.log('age:', age2);
// console.log(typeof age2);// Number

// age2>=18 ? console.log(`${name1} can get ID`):console.log(`${name1} can not get ID`);
// //A function can be assigned to a variable with backtick
// const res = age2>19? console.log( `${name1} could get ID` ): console.log(`${name1} could not get ID`);

//----> TYPE CONVERSIONS
// const money ="100";
// console.log(money +14);//10014
// console.log(Number(money)+14);//114

// const lang="java";
// console.log(Number(lang));//NaN
// console.log(Number("123a"));//NaN

// const num3=23;
// console.log(String(num3),2);//23 2, number convertd to string

// const s1=3;
// console.log(Boolean(s1));//true
