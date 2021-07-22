//? ==========  getElementById===========
const par01 = document.getElementById("par");
//console.log(document.getElementById("par")); // Returned <a> element
par01.style.color = "White";
par01.style.backgroundColor = "black";
par01.style.fontSize = "20px";

const but01 = document.getElementById("btn");
but01.style.width = "200px";
but01.style.height = "100px";
but01.style.color = "red";
but01.style.fontSize = "22px";
but01.style.background = "black";
but01.innerHTML = "Search";

//? ========== getElementsByTagName() ========
const pic = document.getElementsByTagName("img");
console.log(pic); // Return HTMLCollection, array
console.log(pic[0]); //Return 1st img

pic[0].style.border = "3px solid red";
pic[1].style.border = "4px solid blue";

//? ========== getElementsByClassName ============
const h101 = document.getElementsByClassName("h1");
h101[0].style.background = "red";
h101[0].style.color = "blue";
h101[0].style.textAlign = "center";

//? ============  querySelector ==================
const title01 = document.querySelector(".title01");
title01.innerHTML = "DOM Selector 😜";

const body01 = document.querySelector("#body01");
body01.style.backgroundImage = "linear-gradient(blue, yellow";

//?============ EVENTS =====================
/*
There are 5 Ways: Javascript and html should be separated
so we should not use 1st and 2nd one
*/

//? 3rd Way : Use just javascript
//* Example: Mouse Over, Mouse outline:
document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
};

//? 4th Way: addEventListener() , define EVENT

document.querySelector("#btn").addEventListener("mouseover",()=>{
    const bt01=document.querySelector("#btn");
    bt01.style.color="blue";
})