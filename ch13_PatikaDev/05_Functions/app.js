// 1.Function with parameter
function calculate(a, b) {
  console.log(a * b);
}
calculate("3", "4");

// 2. Function without name

let calculate1 = function (a, b) {
  console.log(a * b);
};
console.log(calculate1(2, 5));

// 3. Return

function name(a, b) {
  return a + b + b;
}

console.log(name("a", "b"));

// 4.  javascript synchronous vs asynchronous

function printScreen1() {
  console.log("First Screen");
}
function printScreen2() {
  setTimeout(function () {
    console.log("Second Screen");
  }, 0.000001);
}

function printScreen3() {
  console.log("Third Screen");
}

printScreen1();
printScreen2();
printScreen3();

/*
First Screen
app.js:33 Third Screen
app.js:29 Second Screen
*/

// 5. How to make synchronous with callback();

setTimeout(function () {
  console.log("show after 3 seconds");
}, 3000);

console.log("Heloo");

// 6. Arrow Functions

let func = (a, b, c) => a + b + c;
console.log(func(2, 3, 41));

let func1 = function (a, b, c) {
  return a + b + c;
};

let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

// 7. Global and Local variable

if (true) {
  let message = 'Merhaba';
  console.log(message);
}
// console.log(message); // ? merhaba mı verir yoksa bir hata mı?5

// 8. functin with parameter
function parameter(a,b){
  alert(`Merhaba ${a} ${b}`);
}
parameter("asdf","bsdf");

// 9. Nested function
function nf(a, b){
  const p=()=>a+ " " +b;
  console.log("basladi: " + p);
  console.log("bitti: " + p );
}

nf("aa","bb");

// 10. Nested example 2
function sayacartir() {
  let sayac = 0;

  return function () {
    return sayac++;
  };
}

let counter = makeCounter();