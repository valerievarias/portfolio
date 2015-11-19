function showLabel(id) {
	document.getElementById(id).style.display = "inline-block";
}

function hideLabel(id) {
	document.getElementById(id).style.display = "none";
}

function errorField(id) {
	document.getElementById(id).className = "has-error";
}

function validField(id) {
	document.getElementById(id).className = "has-success";
}
/*
function valSuc(id) {
	document.getElementById(id).className = "fa fa-check";
}

function valEr(id) {
	document.getElementById(id).className = "fa fa-times";
}
*/


function validateName() {

	var voornaam = document.getElementById("voornaam").value;

	if(voornaam.length == 0) {
		showLabel("voornaamPrompt");
		showLabel("nFormError");
		errorField("voornaam");
		messagePrompt("Name is required", "voornaamPrompt");
		return false;
	}
	if(!voornaam.match(/^[A-Za-z]*.\s.*/)) {
		showLabel("voornaamPrompt");
		showLabel("nFormError");
		hideLabel("nFormValid");
		errorField("voornaam");
		messagePrompt("Please enter First and Last name", "voornaamPrompt");
		return false;
	}
	showLabel("nFormValid");
	hideLabel("nFormError");
	validField("voornaam");
	hideLabel("voornaamPrompt");

	return true;
}

function validateEmail() {

	var email = document.getElementById("email").value;

	if(email.length == 0) {
		showLabel("emailPrompt");
		showLabel("eFormError");
		errorField("email");
		messagePrompt("Email is required", "emailPrompt", "white");
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-0-9]*@[A-Za-z]*[\.][a-z]{2,10}$/)) {
		showLabel("emailPrompt");
		errorField("email");
		showLabel("eFormError");
		hideLabel("eFormValid");
		messagePrompt("Please enter valid email address, e.g. example@email.com", "emailPrompt", "white");
		return false;
	}
	showLabel("eFormValid");
	hideLabel("eFormError");
	validField("email");
	hideLabel("emailPrompt");
	return true;

}

function validateSubject() {

	var onderwerp = document.getElementById("onderwerp").value;

	if(onderwerp.length == 0) {
		showLabel("onderwerpPrompt");
		showLabel("sFormError");
		hideLabel("sFormValid");
		errorField("onderwerp");
		messagePrompt("Subject is required", "onderwerpPrompt", "white");
		return false;
	}

	showLabel("sFormValid");
	hideLabel("sFormError");
	validField("onderwerp");
	hideLabel("onderwerpPrompt");
	return true;
}

function validateMessage() {

	var bericht = document.getElementById("bericht").value;
	var required = 150;
	var left = required - bericht.length;

	if(left > 0) {
		messagePrompt("Atleast " + left + " charachters", "berichtPrompt", "white");
		return false;
	}

	/*if(bericht.length == 0) {
		messagePrompt("Message required", "berichtPrompt", "white");
		return false
	}

	if(!bericht.match(/^[A-Za-z]*\s.{150,}$/)) {
		messagePrompt("Atleast 150 charachters", "berichtPrompt", "white");
		return false;
	}
	*/

	messagePrompt("Message valid", "berichtPrompt", "green");
	return true;
}

function validateSend() {

	if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
		return false;	
	}
}





function messagePrompt(message, promptLocation) {

	document.getElementById(promptLocation).innerHTML = message;
}