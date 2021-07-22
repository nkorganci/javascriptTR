//*querySelector can be used as: ".class_name" , "#id"

function calculate() {
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const result = (Math.PI * r * r * h).toFixed(2);
  console.log(result, r, h);
  document.querySelector(".volume").innerHTML = result;
}

const button = document.querySelector(".btn");
button.style.color = "red";
button.style.backgroundColor = "yellow";
