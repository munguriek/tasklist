//Initialise UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//A function to load all event listeners
loadEventListeners();

function loadEventListeners(){
    //Add task Event
    form.addEventListener('submit', addTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add a class
    link.className = 'delete-item secondary-content';
    //Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    //Append child to ul
    taskList.appendChild(li);
    //clear input
    taskInput.value == '';
    e.preventDefault();
}