const todoList = document.querySelector(".todoList ul");
const openAddTodoBtn = document.querySelector(".addTodo")
const addTodoForm = document.querySelector(".addTodoForm")
const cancelTodoBtn = document.querySelector(".cancelTodoBtn")
const addTodoBtn = document.querySelector(".addTodoBtn");
const addTodoInput = document.querySelector(".addTodoInput")

const todo = [
  {
    name: "Wash Plates",
    status: "done"
  }
]

const loadTodo = () => {
  todo.map((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    todoItem.classList.add(index);
    todoItem.innerHTML = `<input type="checkbox" class="todoCheck">${todo.name}<div class="todoControls"><button class="editTodo"><i class="fa-solid fa-pen-to-square"></i></button> <button class="deleteTodo"><i class="fa-solid fa-trash"></i></button></div>`
    todoList.appendChild(todoItem);
  })
}

const clearTodo = () => {
  while(todoList.firstChild){
    todoList.firstChild.remove()
  }
}

loadTodo()

openAddTodoBtn.addEventListener("click", () => {
  addTodoForm.style.display = "flex"
})

cancelTodoBtn.addEventListener("click", (e) => {
  e.preventDefault()
  addTodoForm.style.display = "none"
})

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const todoItem = addTodoInput.value;
  todo.push({
    name: todoItem,
    status: "pending"
  })
  addTodoInput.value = "";
  addTodoForm.style.display = "none"
  clearTodo()
  loadTodo()
})