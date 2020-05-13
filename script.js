var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");


// ul.onclick=function(event){
// 	event.target.classList.toggle("done");
// }

ol.addEventListener("click",function(event){
	event.target.classList.toggle("done");
})


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
	var delbutton=document.createElement("button");
	delbutton.appendChild(document.createTextNode("Delete"));
	li.appendChild(delbutton);
	delbutton.addEventListener("click",function(event){
         event.target.parentNode.remove();
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);