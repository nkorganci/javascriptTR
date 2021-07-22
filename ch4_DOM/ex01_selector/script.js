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
h101[0].style.background="red";
h101[0].style.color="blue";
h101[0].style.textAlign="center";
 
