

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

    //drop down color

    //Create array of options to be added
    var arr = ["Green", "Yellow", "Red"];

    //Create and append select list
    const selectList = document.createElement("select");
    selectList.classList.add("mySelect");
    toDoDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < arr.length; i++) {
      var option = document.createElement("option");
      option.value = arr[i];
      option.text = arr[i];
      selectList.appendChild(option);
    }
    toDoDiv.style.color = "Green";
    selectList.addEventListener('change', colorText);


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
  if (listItem.style.textDecoration !== "line-through") {
    listItem.style.textDecoration = "line-through";
  } else {
    listItem.style.textDecoration = "none";
  }
  
  
}

function colorText(e) {
  const selectColor = e.target;//select element
  if (selectColor.value === "Green") {
    selectColor.parentElement.style.color = "Green";
  } else if (selectColor.value === "Yellow") {
    selectColor.parentElement.style.color = "Yellow";
  } else {
    selectColor.parentElement.style.color = "Red";
  }
}
