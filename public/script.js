let color = document.getElementsByClassName("color");
	for (let i = 0; i < color.length; i++) {
		color[i].onclick = changeColor;
	}

function changeColor(e) {
	let hex = e.target.getAttribute("data-hex");
	let path = e.target.getAttribute("data-path");

	let overlay = document.getElementById(path);
	overlay.style.fill = hex;
}


let design = document.getElementsByClassName("shirt-design");
	for (let i = 0; i < design.length; i++) {
		design[i].onclick = changeDesign;
	}

function changeDesign(e) {
	let pathOne = e.target.getAttribute("data-path-1");
	let pathTwo = e.target.getAttribute("data-path-2");
	let pathThree = e.target.getAttribute("data-path-3");
	let designOne = document.getElementById("path-1");
	let designTwo = document.getElementById("path-2");
	let designThree = document.getElementById("path-3");


	designOne.setAttribute("d", pathOne);
	designTwo.setAttribute("d", pathTwo);
	designThree.setAttribute("d", pathThree);
}





/*
let design = document.getElementsByClassName("shirt-design");
	for (let i = 0; i < design.length; i++) {
		design[i].onclick = changeDesign;
	}


function changeDesign(e) {
	let designChoice = e.target.getAttribute("data-design");
	let overlay2 = document.getElementById(designChoice);

	overlay2.style.display = "block";
	console.log(overlay2);
}*/


