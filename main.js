
//elements
const toDoInput = document.getElementById("inTask");
const toDoButton = document.getElementById("addButton");
const toDoList = document.getElementById("toDoList");

//event listeners

toDoButton.addEventListener('click', addTask);

//e rep element that was affected. Automatically passed when you add an event listener.
function addTask(e) {
  console.log("Hello world!");
}