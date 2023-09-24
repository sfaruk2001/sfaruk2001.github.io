

//elements
const toDoInput = document.getElementById("inTask");
const toDoButton = document.getElementById("addButton");
const toDoList = document.getElementById("toDoList");

//event listeners
toDoButton.addEventListener('click', addTask);
//the event listener for delete and complete is created when a new list item is created


function addTask(e) {

  if (toDoInput.value.length > 0) {
    //create the div that holds the unordered list
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    //create a list item
    const newTask = document.createElement('li');
    newTask.innerText = toDoInput.value;
    newTask.classList.add('toDoTask');

    toDoDiv.appendChild(newTask);

    //complete button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    checkButton.classList.add("complete");
    toDoDiv.appendChild(checkButton);

    checkButton.addEventListener('click', completeTask);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    deleteButton.classList.add("delete");
    toDoDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', deleteTask);//add event listener to delete the task!

    const inDate = document.createElement("input");
    inDate.type = "date";
    inDate.classList.add("dueDate");
    toDoDiv.appendChild(inDate);

    //add to list
    toDoList.appendChild(toDoDiv);

    toDoInput.value = "";
  } else {//if task is entered as empty
    alert("Please enter an event");
  }

}


function deleteTask(e) {
  const listItem = e.target;
  listItem.parentElement.remove();
}

function completeTask(e) {
  const listItem = e.target.previousElementSibling;
  listItem.style.textDecoration = "line-through"; 
  //const listItem = e.target.parentElement;//parent div
  
  
}
