let base64String = "";
let img = document.querySelector(".img");

function imageUploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];

	var reader = new FileReader();
	console.log("next");
	
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
	}
	reader.readAsDataURL(file);
}

function displayString() {
	console.log("Base64String about to be printed");
    img.src= "data:image/png;base64,"+ base64String;
    img.style.display = "block";
}
