// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  // Add click event for marking task as completed
  taskItem.querySelector('span').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
};

// Function to delete a task
const deleteTask = (button) => {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
};

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" in the input field
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
