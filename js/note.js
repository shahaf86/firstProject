var inputTitle;
var inputContent;
var inputDate;
var getInputTitle;
var getInputContent;
var getInputDate;
var getInputId;

function note(title, content, date, id){
	this.inputTitle = inputTitle;
	this.inputContent = inputContent;
	this.inputDate = inputDate;
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
