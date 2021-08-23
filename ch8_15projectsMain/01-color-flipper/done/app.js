// 1 SELECTORS
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const colors = ["green", "red", "blue"];

// 2 EVENTS
btn.addEventListener("click", background);

// 3 FUNCTIONS

function background() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
//   color.style.backgroundColor=colors[randomNumber];
  color.style.color=colors[randomNumber];
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
