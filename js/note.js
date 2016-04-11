var inputTitle;
var inputContent;
var inputDate;
var noteArrayId;
var getInputTitle;
var getInputContent;
var getInputDate;
var getInputId;

function note(title, content, date, id){
	this.inputTitle = title;
	this.inputContent = content;
	this.inputDate = date;
	this.noteArrayId = id;
	this.getInputTitle = function getInputTitle(){
		return title;
	}
	this.getInputContent = function getInputContent(){
		return content;
	}
	this.getInputDate = function getInputDate(){
		return date;
	}
	this.getInputId = function getInputId(){
		return id;
	}
}
