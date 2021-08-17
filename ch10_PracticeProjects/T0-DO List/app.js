//*=======================   SELECTORS ==================================
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//* ====================  EVENT LISTENERS ================================

todoButton.addEventListener("click", addTodo);

//* ====================  FUNCTIONS =======================================
function addTodo(e) {
  //Prenvent from submitting
  e.preventDefault();

  //Create todo DIV in UL list
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create li in DIV
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = "hey";
  todoDiv.appendChild(newTodo)

  //Create Check mark Button
  const completedButton=document.createElement("button")
  completedButton.ad


  
}
