// ? ========  1 SELECTORS =====================================================
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// ? ====== 2 Event Listeners ===============================================

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//? =====    3 Functions =====================================================
// ? ADD TODO
function addTodo(event) {
  // Prevent refreshing page
  event.preventDefault();

  // adding todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create "li"
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Checkmark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class= 'fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Chec trash button
  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = "<i class= 'fas fa-trash'></i>";
  trashbutton.classList.add("trash-btn");
  todoDiv.appendChild(trashbutton);

  //Append to the list
  todoList.appendChild(todoDiv);

  //Clear input value
  todoInput.value = "";
}

//? DELETE CHECK
function deleteCheck(e) {
  const item = e.target;

  // Delete TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
