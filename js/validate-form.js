function validateName() {

	var voornaam = document.getElementById("voornaam").value;

	if(voornaam.length == 0) {
		showLabel("voornaamPrompt");
		messagePrompt("Name is required", "voornaamPrompt", "red");
		return false;
	}
	if(!voornaam.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		showLabel("voornaamPrompt");
		messagePrompt("First and Last name please", "voornaamPrompt", "red");
		return false;
	}
	messagePrompt("Hi " + voornaam, "voornaamPrompt", "green");
		return true;
}

function validateEmail() {

	var email = document.getElementById("email").value;

	if(email.length == 0) {
		messagePrompt("Email is required", "emailPrompt", "red");
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-0-9]*@[A-Za-z]*[\.][a-z]{2,10}$/)) {
		messagePrompt("Please enter valid email address, e.g. example@email.com", "emailPrompt", "red");
		return false;
	}

	messagePrompt("Valid email",  "emailPrompt", "green");
	return true;

}

function validateSubject() {

	var onderwerp = document.getElementById("onderwerp").value;

	if(onderwerp.length == 0) {
		messagePrompt("Subject is required", "onderwerpPrompt", "red");
		return false;
	}

	messagePrompt("Subject valid", "onderwerpPrompt", "green");
	return true;
}

function validateMessage() {

	var bericht = document.getElementById("bericht").value;
	var required = 150;
	var left = required - bericht.length;

	if(left > 0) {
		messagePrompt("Atleast " + left + " charachters", "berichtPrompt", "red");
		return false;
	}

	/*if(bericht.length == 0) {
		messagePrompt("Message required", "berichtPrompt", "red");
		return false
	}

	if(!bericht.match(/^[A-Za-z]*\s.{150,}$/)) {
		messagePrompt("Atleast 150 charachters", "berichtPrompt", "red");
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

function showLabel(id) {
	document.getElementById(id).style.display = "block";
}



function messagePrompt(message, promptLocation, color) {

	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}