// Get HTML Elements in input
const form = document.querySelector("#form-id"); //Anlamadim
const formInput = document.querySelector(".todo-input");
const btnSubmit = document.querySelector(".todo-button");

//Get output elements
const outputList = document.querySelector(".todo-list");

// Addeventlistener for input elements
btnSubmit.addEventListener("click", btnFunction);

//Functions
function btnFunction(e) {

  e.preventDefault();

  let inputValue = formInput.value;

  let outputLi = document.createElement("li");
  outputLi.classList.add("classLi");
  outputList.appendChild(outputLi);

  let createSpan = document.createElement("span");
  createSpan.classList.add("span-create");

  let deleteSpan = document.createElement("span");
  deleteSpan.classList.add("span-delete");

  outputLi.appendChild(createSpan);
  outputLi.appendChild(deleteSpan);

  createSpan.innerHTML = inputValue;
};
