 const inputs = document.querySelectorAll(".input");


 function addcl(){
 	let parent = this.parentNode.parentNode;
 	parent.classList.add("focus");
 }

 function remcl(){
 	let parent = this.parentNode.parentNode;
 	if(this.value == ""){
 		parent.classList.remove("focus");
 	}
 }


 inputs.forEach(input => {
 	input.addEventListener("focus", addcl);
 	input.addEventListener("blur", remcl);
 });

function validate(){
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if(username=="admin" && pass=="admin"){
		window.location.href = "../Dashboard/index.html";
		alert("Login successful");
		
	}
	else{
		alert("Login failed");
	}
}
