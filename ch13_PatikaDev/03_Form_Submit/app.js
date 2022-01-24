let h1 = document.getElementById("h1");
let btn = document.getElementById("btn");

btn.addEventListener("click", f);
function f(event) {
  event.preventDefault();
  h1.innerHTML = "Yes";
  console.log("completed");
}

//TODO 2- SUBMIT

let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let message = [];
  if (name.value === "" || name.value === null) {
    message.push("Name is required");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = message.join(",");
  }
});

//TODO 3- onSubmit, onChange

let input = document.getElementById("input");
input.setAttribute("type", "text");
input.setAttribute("value", "write here");
