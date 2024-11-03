function addTodo() {
  const input = document.getElementById('todoInput');
  const inputValue = input.value.trim();

  if (inputValue === '') {
    alert("Please enter a task!");
    return;
  }

  const todoList = document.getElementById('todolist');
  const newTodo = document.createElement('div');

  newTodo.className = 'todo-item';
  newTodo.textContent = inputValue;

  todoList.appendChild(newTodo);

  input.value = '';

  
  setTimeout(() => {
    alert(`Thank you for inputting your details: "${inputValue}"`);
  }, 300);
}


