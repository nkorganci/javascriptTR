const color = ["red", "green", "rgb(222, 33, 22)", "#23cd3d"];
const colort = document.querySelector(".color");
const btnt = document.querySelector(".btn");

btnt.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = color[randomNumber];
  
  colort.textContent=color[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
};
