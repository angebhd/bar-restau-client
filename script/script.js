
console.log('JS is Running')

    // gett all saved data, if there is not, creta an empty array
let allTasks = JSON.parse(localStorage.getItem('allTasks')) || []
//Now display all the previous tasks tasks
taskNumber = allTasks.length
for (let index = 0; index < taskNumber; index++) {
    displayTask(allTasks[index]);

}
// acces the id of the last task
let taskId
if (taskNumber >= 1){
    taskId = allTasks[taskNumber-1].id || 0;
console.log(taskId);
} else {
    taskId = 0
}

let taskForm = document.getElementById('taskForm')
if (taskForm){
    taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // create an object with the data comming from the form
    const oneTaskData = {
        id: ++taskId,
        task: this.elements['task'].value,
        description: this.elements['description'].value,
        prioritize: this.elements['prioritize'].checked
    };

    // update tasks on the array  and put it on the local storage
    allTasks.push(oneTaskData);
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    console.log(allTasks);


    displayTask(oneTaskData);

    // Output the object (you can perform further actions with it)
    console.log(oneTaskData);

    this.reset(); // Reset form 

});
}
function displayTask(taskObjet) {
if (taskObjet !== null) {
    // create a div tag to display the task
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
    <hr>
      <ul><li>${taskObjet.task} </li></ul>
      <p>&rarr; ${taskObjet.description}</p>
      <span id= 'task${taskObjet.id}' class = 'edit'>Edit &#9998; </span>
      <span id= "${taskObjet.id}" class = "trash" > Delete &#128465;</span>
      
    `;
    if (taskObjet.prioritize) {taskDiv.classList.add('prioritize');}
    taskDiv.id = `task-${taskObjet.id}`

    // Display the task data on the screen
    const displayDiv = document.getElementById('displayTasks');
    if(displayDiv !== null){ displayDiv.appendChild(taskDiv);}
}}
/// DELETES TASKS
// Get all elements with the class 'trash'
const trashIcons = document.querySelectorAll('.trash');

// Iterate through each trash icon and attach a click event listener
trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener('click', function(event) {
    // Access the ID of the clicked task
    const clickedId = event.target.id;
    //catch the tag with the coressponding id, then if it exists, delete it
    const taskToDelete = document.getElementById(clickedId);
    console.log(clickedId);
    if (taskToDelete) {
        deleteOneTask(clickedId);
    }
  });
});
/// delete all tasks
const deleteAll = document.getElementById('deleteAll');
    // Add an event listener to the element
    if (deleteAll) {
    deleteAll.addEventListener('click', function(event) {
      localStorage.allTasks = null; // delete all tasks
      location.reload();
    })
}

function deleteOneTask(idToDelete) {
   allTasks = allTasks.filter(task => task.id !== +idToDelete);
    localStorage.setItem('allTasks', JSON.stringify(allTasks));
    location.reload();
}


/////////////Updating tasks////////////////

// Get all elements with the class 'trash'
const editIcons = document.querySelectorAll('.edit');

// Iterate through each edit icon and attach a click event listener
editIcons.forEach(editIcon => {
    editIcon.addEventListener('click', function(event) {
        // Access the ID of the clicked task
        const clickedId = event.target.id;
        const clickedIdNumber = parseInt(clickedId.match(/\d+/)[0]);
        // Catch the tag with the corresponding id, then if it exists, delete it
        const taskToUpdate = document.getElementById(`task-${clickedIdNumber}`); // the div that contains the task clicked

        // Check if the update form already exists for the clicked task
        if (taskToUpdate.querySelector('#updateForm')) {
            // If the update form already exists, exit the function or perform any other actions
            return; // Prevent further execution of the function
        }

        // Get the task object to update 
        let theTask = allTasks.find(task => task.id == clickedIdNumber);
        console.log(theTask);
        const updateDiv = document.createElement('div');
        updateDiv.innerHTML = `
            <form id='updateForm'>
                <label for="updateTask"> Update Task: </label>
                <input name='updateTask' type='text' value=${theTask.task} required ></input>
                <label for="updateDescription"> Update Description: </label>
                <input name='updateDescription' type='text' value=${theTask.description}></input>
                <input name='updatePrioritize' type='checkbox' value=${theTask.prioritize}></input>
                <label for="updatePrioritize"> Priority</label>
                <button type="submit">Modify</button>
            </form>
        `;
        taskToUpdate.appendChild(updateDiv);
        console.log(clickedId);
        console.log(clickedIdNumber);

        let updateForm = document.getElementById('updateForm');
        if (updateForm) {
            updateForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission

                // create an object with the data coming from the form
                const updatedData = {
                    task: this.elements['updateTask'].value,
                    description: this.elements['updateDescription'].value,
                    prioritize: this.elements['updatePrioritize'].checked
                };

                updateOneTask(clickedIdNumber, updatedData); // call the function to update the task

                function updateOneTask(id_task, objectTask) {
                    allTasks = allTasks.map(task => {
                        if (task.id == id_task) {
                            task.task = objectTask.task;
                            task.description = objectTask.description;
                            task.prioritize = objectTask.prioritize;
                        }
                        return task;
                    })
                    localStorage.setItem('allTasks', JSON.stringify(allTasks));
                    console.log('Task updated, redirecting to index.html');
                    location.reload();
                }
            });
        }
    });
});






