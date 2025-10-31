function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert('Please enter task text!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="removeTask(this)">❌ Delete</button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

function removeTask(button) {
  button.parentElement.remove();
}
