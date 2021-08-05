//Selectors



const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "Hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check mark Button
  const completebutton = document.createElement("button");
}

