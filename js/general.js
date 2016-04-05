var newNoteInput = document.getElementById("noteInput");
var noteArray = [];
var inputContent;

function createNote(){
	inputTitle = document.getElementById("paperInputTitle");
	inputDate = document.getElementById("paperInputDate");
	inputContent = document.getElementById("paperInputContent");
	var ifAllIsGood = validation();
		if(ifAllIsGood == true){
			var Newnote = new note(inputTitle.value, inputContent.value, inputDate.value);
			noteArray.push(Newnote);
			return Newnote;
		}
}

function getCounter(){
	var counter = document.getElementById("count");
	counter.innerHTML = "You have" + " " + (noteArray.length) + " " + "Notes";
}

function validation(){
		if((inputTitle.value == "") && (inputDate.value == "") && (inputContent.value == "")){
			inputTitle.style.border = "5px solid red";
			inputTitle.style.backgroundColor = "red";
			inputDate.style.border = "5px solid red";
			inputDate.style.backgroundColor = "red";
			inputContent.style.border = "5px solid red";
			inputContent.style.backgroundColor = "red";
			return false;
		}
		if((inputTitle.value == "") && (inputDate.value == "")){
			inputTitle.style.border = "5px solid red";
			inputTitle.style.backgroundColor = "red";
			inputDate.style.border = "5px solid red";
			inputDate.style.backgroundColor = "red";
			return false;
		}
		if((inputTitle.value == "") && (inputContent.value == "")){
			inputTitle.style.border = "5px solid red";
			inputTitle.style.backgroundColor = "red";
			inputContent.style.border = "5px solid red";
			inputContent.style.backgroundColor = "red";
			var arr = inputDate.value.split('/');
			var isDateAString = true;
			for(var i = 0; i < arr.length; i++){
				if(isNaN(arr[i])){
					isDateAString = false;
					break;
				}
			}
			if((isDateAString == false) || (inputDate.value.indexOf("/") === -1)){
				inputDate.style.border = "5px solid red";
				inputDate.style.backgroundColor = "red";
				return false;
			}
			if((arr[0] < 0) || (arr[1] < 0) || (arr[2] < 0) || (arr[0].length == 2) || 
				(arr[1].length == 2) || (arr[2].length == 4)){
				inputDate.style.border = "5px solid red";
				inputDate.style.backgroundColor = "red";
			}
			return false;
		}
		if((inputDate.value == "") && (inputContent.value == "")){
			inputDate.style.border = "5px solid red";
			inputDate.style.backgroundColor = "red";
			inputContent.style.border = "5px solid red";
			inputContent.style.backgroundColor = "red";
			return false;
		}		
		if(inputTitle.value == ""){
			inputTitle.style.border = "5px solid red";
			inputTitle.style.backgroundColor = "red";
			return false;
		}
		if(inputDate.value == ""){
			inputDate.style.border = "5px solid red";
			inputDate.style.backgroundColor = "red";
			return false;
		}
		if(inputContent.value == ""){
			inputContent.style.border = "5px solid red";
			inputContent.style.backgroundColor = "red";
			return false;
		}
		else{
			return true;
		}
}

function addNote (){
	if(Newnote = createNote()){
		getCounter();
		var li = document.createElement("li");
		var h3 = document.createElement("h3");
		var p = document.createElement("p");
		var p1 = document.createElement("p");
		var deleteButton = document.createElement("button");
		deleteButton.onclick = function(event){
			event.target.parentElement.remove();
			console.log(event.target.parentElement.ATTRIBUTE_NODE);
			noteArray.splice(1,1);
			getCounter();
		}
		h3.innerHTML = Newnote.getInputTitle();
		p1.innerHTML = Newnote.getInputDate();
		p.innerHTML = Newnote.getInputContent();
		deleteButton.innerHTML = "X";
		li.appendChild(h3);
		li.appendChild(p1);
		li.appendChild(p);
		li.appendChild(deleteButton);
		deleteButton.className = "delete";
		deleteButton.style.display = "none";
		deleteButton.style.position = "absolute";
		deleteButton.style.top = "-7px";
		deleteButton.style.right = "-15px";
		newNoteInput.appendChild(li);
	}
}
