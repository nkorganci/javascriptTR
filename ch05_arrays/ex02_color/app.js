document.querySelector(".btn").onclick = function () {
  const colors = ["Red", "Green", "Blue"];
  const random01 = Math.floor(Math.random() * colors.length);
  document.querySelector(".color ").innerHTML = colors[random01];
  document.querySelector("body").style.backgroundColor = colors[random01];
//   document.querySelector("h1").style.color = colors[random01];
};
