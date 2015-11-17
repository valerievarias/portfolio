
function voornaam() {
	var name = document.getElementById('voornaam').value;
	var re = ('/^([0-9]+)$/');

	if(name.match(re) || name !== "") {
        alert("Yeaaaaa.");
    }
    else {
        alert("Maybe baby.");
    }
}

function email() {
	if(document.getElementById("email").value === ""){
		alert("Please email.");
	}
}

function onderwerp() {
	if(document.getElementById("email").value === ""){
		alert("Please subject.");
	}
}

function bericht() {
	if(document.getElementById("email").value === ""){
		alert("Please message.");
	}
}