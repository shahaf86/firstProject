var inputTitle;
var inputContent;
var inputDate;
var getInputTitle;
var getInputContent;
var getInputDate;
var arrayPosition;

function note(title, content, date, arrayPosition){
	this.inputTitle = inputTitle;
	this.inputContent = inputContent;
	this.inputDate = inputDate;
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
}
