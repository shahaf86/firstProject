var inputTitle;
var inputContent;
var inputDate;
var getInputTitle;
var getInputContent;
var getInputDate;
var arrayPosition;
var id;

function note(title, content, date, arrayPosition,id){
	this.inputTitle = inputTitle;
	this.inputContent = inputContent;
	this.inputDate = inputDate;
	this.id = id;
	this.arrayPosition = arrayPosition;
	this.getInputTitle = function getInputTitle(){
		return title;
	}
	this.getInputContent = function getInputContent(){
		return content;
	}
	this.getInputDate = function getInputDate(){
		return date;
	}
	this.getNoteId = function getNoteId(){
		return id;
	}
}
