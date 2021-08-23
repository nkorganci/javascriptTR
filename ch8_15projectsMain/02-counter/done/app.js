// Selectors
const value = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
let count = 0;

// Events
increase.addEventListener("click", increase1);
decrease.addEventListener("click", decrease1);
reset.addEventListener("click", reset1);

//functions
function increase1() {
  count++;
  value.textContent = count;
}

function decrease1() {
  count--;
  value.textContent = count;
}
function reset1() {
  count = 0;
  value.textContent = count;
}
 