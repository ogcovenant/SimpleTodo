const todoList = document.querySelector(".todoList ul");
const openAddTodoBtn = document.querySelector(".addTodo")
const addTodoForm = document.querySelector(".addTodoForm")
const cancelTodoBtn = document.querySelector(".cancelTodoBtn")
const addTodoBtn = document.querySelector(".addTodoBtn");
const addTodoInput = document.querySelector(".addTodoInput")
const editTodoForm = document.querySelector(".editTodoForm");
const openEditTodoBtn = document.querySelector(".editTodo");
const editTodoBtn = document.querySelector(".saveTodoBtn");
const cancelTodoSaveBtn = document.querySelector(".cancelTodoSaveBtn");
const editTodoInput = document.querySelector(".editTodoInput")
const deleteTodoBtn = document.querySelector(".deleteTodo");
let currentTodoValueIndex = 0;


const todo = []

const loadTodo = () => {
  todo.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    todoItem.classList.add(index);
    todoItem.innerHTML = `<input type="checkbox" class="todoCheck"><span>${todo.name}</span><div class="todoControls"><button class="editTodo" onclick="openEditForm(event)" ><i class="fa-solid fa-pen-to-square"></i></button> <button class="deleteTodo" onclick="deleteTodo(event)" ><i class="fa-solid fa-trash"></i></button></div>`
    todoList.append(todoItem);
    
  })
}

const clearTodo = () => {
  while(todoList.firstChild){
    todoList.firstChild.remove()
  }
}

const openEditForm = async (e) => {
  if(addTodoForm.style.display === "flex" || editTodoForm.style.display === "flex"){
    addTodoForm.style.display = "none"
    editTodoForm.style.display = "none"
    editTodoForm.style.display = "flex"
  }else{
    editTodoForm.style.display = "flex"
  }

  currentTodoValueIndex = await e.target.parentElement.parentElement.classList[1]
  console.log(todo[currentTodoValueIndex])
  if(e.target.parentElement.parentElement.parentElement.children[1].innerHTML === undefined){
    editTodoInput.value = e.target.parentElement.parentElement.children[1].innerHTML;
  }else{
    editTodoInput.value = e.target.parentElement.parentElement.parentElement.children[1].innerHTML;
  }
}


const deleteTodo = (e) => {
  const toDelete = e.target.parentElement.parentElement.classList[1];
  todo.splice(toDelete, 1)
  clearTodo()
  loadTodo()
}

const edit = (e) => {
  e.preventDefault()
  const editedTodo = editTodoInput.value;
  todo[currentTodoValueIndex].name = editedTodo
  clearTodo()
  loadTodo()
  editTodoForm.style.display = "none"
}

clearTodo()
loadTodo()

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

cancelTodoSaveBtn.addEventListener("click", (e) => {
  e.preventDefault()
  editTodoForm.style.display = "none"
})

openAddTodoBtn.addEventListener("click", () => {
  if(editTodoForm.style.display === "flex" || addTodoForm.style.display === "flex"){
    editTodoForm.style.display = "none"
    addTodoForm.style.display = "none"
    addTodoForm.style.display = "flex"
  }else{
    addTodoForm.style.display = "flex"
  }
})