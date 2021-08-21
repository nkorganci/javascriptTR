//*=======================   SELECTORS ==================================
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//* ====================  EVENT LISTENERS ================================

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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

  //DELETE TODO
  //! Why classList has an array and need to be equal to ...
  if (item.classList[0] === "trash-btn") {
    // item.remove();
    const todo = item.parentElement;

    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
}
