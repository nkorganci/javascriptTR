//*=======================   SELECTORS ==================================
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//* ====================  EVENT LISTENERS ================================

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

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
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //Create Check mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append DIV to list

  todoList.appendChild(todoDiv);

  //Clear todoInput Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //! Why classList has an array and need to be equal to ...
  if (item.classList[0] === "trash-btn") {
    todoInput.remove();
  }
}
