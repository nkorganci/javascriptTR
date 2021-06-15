// const age = 18;
// let result=0;

// if (age > 18) {
//   result = "Adult";
// } else {
//   result = "child";
// }

// console.log(result);

// // CALCULATOR
// const num1 = Number(prompt("write the 1st num"));
// const typeOfCal = prompt("What do you want to do: ");

// const num2 = Number(prompt("write the 2nd num"));//Not to have String
// let res=0;
// if (typeOfCal=="*") {
//   res=num1*num2;
// } else if (typeOfCal == "/") {
//   res = num1 / num2;
// } else if (typeOfCal == "+") {
//   res = num1 + num2;
// }else{
//     alert("Wrong operation")
// }

// console.log(`result is ${num1} ${typeOfCal} ${num2} = ${res}`);

//--->> Example, if healty
// const a =prompt("How old are you");
// const h= prompt("Are you healty");

// a>18&&h=="yes"? console.log("accepted"):console.log("rejected");
// alert(a>18&&h=="yes" ? "good":"bad");
// const rsl = a>18&&h=="yes"? console.log("accepted"):console.log("rejected");// can be assigned to a variable

//--------------->> SWITCH CASE
// it checks value and type '==='
// const day=Number(prompt("Write the day number"));//promt takes String automatically
// var a;2
// switch(day){
//     case 1:
//         dayn="monday";
//         a="monday2";
//         //break;
//     case 2:
//         dayn="tuesday";
//         break;
//     default:
//         alert("not a valid num");
//         break;
// }

// console.log(dayn);
// console.log(a);

//------->>> TERNARY OPERATORS

var a = 22;
var b = a > 120 ? "fast 😢" : a > 90 ? "normal 👍" : "slow 👏";
console.log(b);

//Example-Grading
a = "a";

switch (a) {
  case "a":
    console.log("a>90");
    break;
  case "b":
    console.log("a>70");
}

//---------->>ITERATIONS, for, for in, fo of , foreach, while, do while
for(let i=0; i<5;i++){
    console.log("hello")
};

for(let i=0; i<5;i++){
    console.log(i)
};

for(let i=0; i<5;i++){
    console.log(`Name${i}`)
};

//--->>do-while
// var a;
// do{
//     a=prompt("write a number");

// }while(a<0||a>100);
// console.log(a);

//--->>>Primary Number
var a=5;
for(var b=2;b<a;b++){
    if(a%b==0){
        console.log("not prime");
        break;
    }else{
        console.log("prime");
        break;
    }

}

//--->>primary number 2

var a=8
var b=true;
for(var c=2;c<a;c++){
    if(a%c==0){
        b=false;
        break;
    }
}
var d= b?"primary":"not primary";
console.log(d);

