//Selectors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

//Events
btn.addEventListener("click", background);

// Functions
function background() {
  const r = randomColorSelect();
  document.body.style.backgroundColor = r;
  color.innerHTML = r;
  btn.style.backgroundColor = r;
  //   color.style.backgroundColor = r;
  color.style.color = r;
}

function randomColorSelect() {
  let randomC = "#";
  for (let i = 0; i < 6; i++) {
    randomN = Math.floor(Math.random() * hex.length);
    randomC += hex[randomN];
  }
  return randomC;
}
