var inputTitle;
var inputContent;
var inputDate;
var noteArrayId;
var getInputTitle;
var getInputContent;
var getInputDate;

function note(title, content, date){
	this.inputTitle = title;
	this.inputContent = content;
	this.inputDate = date;
	this.getInputTitle = function getInputTitle(){
		return title;
	}
	this.getInputContent = function getInputContent(){
		return content;
	}
	this.getInputDate = function getInputDate(){
		return date;
	}
}
