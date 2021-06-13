console.log("Hello Javascript");
// console.log("easey")  , comment ctrl /
/* 2nd way of comment */
// console.error("this is an error")
// console.warn("thi is a warning")
//alert("Stop pay attention");

//==> VARIABLE==============================================
/*
var--> is a global variable , do not try to use often
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

//---------------->>LET
/*
Let is a block-scope variable
Let is only valid in local
*/
let price;
console.log(typeof price);//undefined
