

//elements
const toDoInput = document.getElementById("inTask");
const toDoButton = document.getElementById("addButton");
const toDoList = document.getElementById("toDoList");

//event listeners
toDoButton.addEventListener('click', addTask);


function addTask(e) {
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

  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  deleteButton.classList.add("delete");
  toDoDiv.appendChild(deleteButton);

 

  //add to list
    toDoList.appendChild(toDoDiv);
}
