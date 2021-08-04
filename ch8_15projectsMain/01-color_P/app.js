const colors = ["red", "green", "#FA23BD", "RGB(22,221,130"];
const b2 = document.querySelector(".b2");
const color = document.querySelector(".color");

b2.addEventListener("click", function () {
  const randomNumber = getRandom();
  document.body.style.backgroundColor = colors[randomNumber];
  console.log(body)
  color.textContent = colors[randomNumber];
});

function getRandom(){
  return Math.floor(Math.random()*colors.length);
}
