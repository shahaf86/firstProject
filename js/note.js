function note(title, content, date){
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
