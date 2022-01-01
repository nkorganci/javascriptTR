// 1. Function with parameter
let firstName="Lorem";

function greetings(firstName1){
  console.log(`Merhaba ${firstName1? firstName1: "No name"}`);
}

greetings("Enver");

// 2. Functin with parameter 2

function f2(n2="Enver2"){
  console.log(`Merhaba ${n2}`);
}

f2("Enver3");

//3. Function with global parameter
let n3="Bera3";

function f3 (){
  console.log(`Merhaba ${n3}`);
}

f3();

// 3. Function with parameters

function f4(fn, ln){
  let info = `Merhaba ${fn} ${ln}`;
  return info;
}

console.log(f4("Enver","Bera"));