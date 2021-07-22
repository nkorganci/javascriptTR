document.querySelector(".on").onclick = function () {
  document.querySelector(".pic").src = "./img/b.png";
};
document.querySelector(".off").onclick = function () {
  document.querySelector(".pic").src = "./img/a.png";
};

//* When the mouse is over the picture turn on/turn off
document.querySelector(".pic").addEventListener("mouseover", () => {
  document.querySelector(".pic").src = "./img/a.png";
});

document.querySelector(".pic").addEventListener("mouseout", function () {
  document.querySelector(".pic").src = "./img/b.png";
});

//* Example: Lowercase to uppercase

document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

//* How can I add an element which is not in HTML from JavaScript
const lastDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const text = document.createTextNode("Programming Language");
h1.appendChild(text);
lastDiv.after(h1);
h1.style.marginTop="20px";
h1.style.color="red";
