var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);
// body.style.background = "red";

function setAmbient(){
	body.style.background = "linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.innerHTML = body.style.background;	
}

color1.addEventListener("input", setAmbient);
color2.addEventListener("input", setAmbient);