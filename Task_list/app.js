// Define UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-task")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

// load all event listeners
loadEventListeners()

//Function to load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener("submit", addTask);

    //Remove task event
    taskList.addEventListener("click", removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTask);
}

//Add task function
function addTask(e) {
    if(taskInput.value === ''){
        alert('add task')
    }

    // Create li element
    const li = document.createElement('li')
    // Add a class
    li.className = 'collection-item'
    //create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value))
    //create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content'
    // Add Icon
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append the link to the li
    li.appendChild(link)
    //Append li to the ul

    taskList.appendChild(li)
    //clear the input

    taskInput.value = ""

    e.preventDefault();
    
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
        e.target.parentElement.parentElement.remove()

    }
}
}

function clearTask() {
    
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild
    
}