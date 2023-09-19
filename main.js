


var addButton = document.getElementById("addButton");
addButton.addEventListener("click", newItem);

function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inTask").value;//text val from search bar
    var text = document.createTextNode(inputValue);//create text node to put in li
    li.appendChild(text);

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("toDoList").appendChild(li);
    }
    document.getElementById("inTask").value = "";
}


/**
 
function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  li.setAttribute("id", "element4"); // added line
  ul.appendChild(li);
  alert(li.id);
}
 */
