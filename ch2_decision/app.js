//?If else is not used often, use TERNARY.
//*Example: If Else

/* const a1 = +prompt("Enter first number");
const a2 = +prompt("Enter second number");
const operation = prompt("What do you want: ");
let cal=0;

if (operation == "+") {
  cal = a1 + a1;
} else if (operation == "-") {
  cal = a1 - a2;
} else if (operation == "*") {
  cal = a1 * a2;
} else {
  console.log("Invalid Operation");
}

console.log(`${a1} ${operation} ${a2}= ${cal}`); */

//* Example: Ternary, if there are too many condition use switch-case or if-else ( more than 3)

/* const b1 = +prompt("Enter your age");
const b2 = prompt("Are you healty y/n");

const res = b1 > 18 && b2 == "y" ? "can be soldier" : "can not be soldier";
console.log(res);
alert(res);
 */

//? SWITCH-CASE, not recommended in javascript
/* const f1 = +prompt("Write a number: ");

switch (f1) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    alert("enter valid number");
    console.log("not a number");
    break;
} */

//* "windows + ." shows emoji 😊

//? ITERATION: Modern javascript does not use iterator anymore like ,
//?lIKE: FOR, FOR IN, FOR OF, FOREACH, WHILE, DO WHILE==> FILTER.. USED

//*for loop:
/* const g = +prompt("enter a number: ");
for (let i = 0; i <g; i++) {
  console.log(`${i} Adam`);
}
 */

//* Primary number
/* const h=+prompt("Enter a number: ");
const count=0;
if(h==0 ||h==1){
    console.log(`${h} is not a prime number`);
}
for(let i=2;i<h;i++){
    if(h%i==0){
        count++;
        console.log(`${h} is not a prime number")
        break;
    }
}
if(count==1)
 */

//? Do while- While- Enter number between 1-100
/* let m;

do{

m = +prompt("Enter a numbert between 0-100: ");

}while(m>100||m<0);
console.log("good") */

//* While- Enter number between 1-100

/* let m=+prompt("Enter a numbert between 0-100: ");

while(m>100 || m<0){
    console.error("enter correct number");
    m = +prompt("Enter a numbert between 0-100: ");
}
console.log("nice job")
 */

//? Example- Enter grade till you press Q

let q = prompt("Enter the grade");
let i = 1;
while (q != "q") {
  q = prompt("Enter the gradeq");
  console.log(i + " number you enered" + q);
  i++;
}
console.log("Successfull grade");
