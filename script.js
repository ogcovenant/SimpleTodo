const todo = [
  {
    name: "Wash Plates",
    status: "done"
  }, {
    name: "Wash clothes",
    staus: "pending"
  }
]

const todoList = document.querySelector(".todoList ul");

todo.map((todo, index) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todoItem");
  todoItem.classList.add(index);
  todoItem.innerHTML = `<input type="checkbox" class="todoCheck">${todo.name}<div class="todoControls"><button class="editTodo"><i class="fa-solid fa-pen-to-square"></i></button> <button class="deleteTodo"><i class="fa-solid fa-trash"></i></button></div>`
  todoList.appendChild(todoItem);
})

