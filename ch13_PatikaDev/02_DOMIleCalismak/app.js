// console.log(document.location.hostname)
// console.log(document.location.pathname)

// console.log(document.body)
// console.log(document.head)
// console.log(document.url)

// console.log(document.body.style.backgroundColor="yellow")

// document.write("write method");
// document.writeln("writeln ")
// document.write("new write")

//Accessing field value by document object
//   let h1 = document.getElementById('title');
//   console.log(h1)
//   h1.innerHTML="converted";

//qUERY SELECTRO

// TODO 1- DOM ELEMENTS
//! 1A-CLICK
let h1 = document.getElementById("h1");
h1.addEventListener("click", domClick);

function domClick() {
  console.log("domClicks works");
  console.log((this.innerHTML = "InnerTEXT has changed"));
  this.style.color == "red"
    ? (this.style.color = "blue")
    : (this.style.color = "red");
}

//! Counter

let counter = localStorage.getItem("counter")
let h2 = document.getElementById("h2");
let i = document.getElementById("increase");
let d = document.getElementById("decrease");

i.addEventListener("click", f);
d.addEventListener("click", f);

function f(){
    this.id=="increase"?h2.innerHTML=
}


// let counter=localStorage.getItem("counter")? Number(localStorage.getItem("counter")):0;
// let i = document.getElementById("increase");
// let d = document.getElementById("decrease");
// let c = document.getElementById("h2");
// c.innerHTML=counter;

// i.addEventListener("click", f);
// d.addEventListener("click",f);

// function f(){
//     console.log(typeof(counter));
//     console.log(this.id);
//     this.id=="increase"? counter+=1:counter-=1;
//     localStorage.setItem("counter",counter);
//     c.innerHTML=counter;
// }
