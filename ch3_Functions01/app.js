//? Functions: There are 3 ways to write functions

//* 1.Way: function decleration

//*1.A
/* function name1() {
  console.log("Adam");
}
name1(); */

//*1.B
/* let name3 = prompt("Enter your name");
function name2() {
  console.log(`Your name is ${name3}`);
}
name2(); */

//*1.C
/* function n1(fname, age1) {
  console.log(`${fname} and ${age1}`);
}
n1("hava", 33); */

//*1.D Example: Odd or even

/* const number = prompt("enter your number");
console.log("before function" + oddEven(number));//Can be called before function
function oddEven(input) {
  return input % 2 == 0 ? "even" : "odd";
}
console.log(oddEven(number));
console.log(`Your number ${number} is ` + oddEven(number));
 */

//? 2 Function Expression: variable name=Function Name, used more.
/* const oddEven01=function(number01){
  return number01%2==0?"even":"odd";

}
console.log(oddEven01(4)); */

//*Example: Which number is bigger?

/* let bigNumber= function(x,y,z){
  if(x>y&&x>z){
    return x;
  }else if(y>x&&y>z){
    return y;
  }else{
    return z;
  }
}
console.log(bigNumber(9,3,4)); */

//? Functional Programming => Arrow Function

const sum = (a, b) => a + b;
console.log(sum(2, 4));

const oddEven02=(c)=>c%2==0?"even":"odd";
console.log(oddEven02(4));
//alert(oddEven02(9));
