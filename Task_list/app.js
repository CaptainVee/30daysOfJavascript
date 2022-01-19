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

    //DOM load event
    
    document.addEventListener("DOMContentLoaded", getTasks)
    //Add task event
    form.addEventListener("submit", addTask);

    //Remove task event
    taskList.addEventListener("click", removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTask);

    //Filter event
    filter.addEventListener("keyup", filterTasks )
}

//Get tasks from LS

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks')=== null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
            // Create li element
            const li = document.createElement('li')
            // Add a class
            li.className = 'collection-item'
            //create text node and append to the li
            li.appendChild(document.createTextNode(task))
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
        
    })
    
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

    // Store in LS
    storeTasksInLocalStorage(taskInput.value)

    //clear the input

    taskInput.value = ""

    e.preventDefault();
    
}

function storeTasksInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')=== null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove()

            removeTaskFromLocalStorage(e.target.parentElement.parentElement)

        }   
    }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem) {

    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task, index) {

        if (taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
        
    })

    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function clearTask() {
    
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild
    

  //Clear from LS
   clearTasksFromLocalStorage()
}


function clearTasksFromLocalStorage() {
    localStorage.clear()
    
}

function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent 
            if (item.toLowerCase().indexOf(text) != -1) {

                task.style.display = "block"
                
            }else{
                task.style.display = "none"
            }
            
        }
    )
    console.log(text)
    
}