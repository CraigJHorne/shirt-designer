const overlay = document.getElementById("product-shape");

var el = document.getElementsByClassName("c1");
	for (var i = 0; i < el.length; i++) {
		el[i].onclick = changeColor;
	}

	function changeColor(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay.style.fill = hex;
	}

const overlay2 = document.getElementById("product-shape2");

var el2 = document.getElementsByClassName("c2");
	for (var i = 0; i < el2.length; i++) {
		el2[i].onclick = changeColor2;
	}

	function changeColor2(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay2.style.fill = hex;
	}

const overlay3 = document.getElementById("product-shape3");

var el3 = document.getElementsByClassName("c3");
	for (var i = 0; i < el3.length; i++) {
		el3[i].onclick = changeColor3;
	}

	function changeColor3(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay3.style.fill = hex;
	}

const overlay4 = document.getElementById("product-shape4");

var el4 = document.getElementsByClassName("c4");
	for (var i = 0; i < el4.length; i++) {
		el4[i].onclick = changeColor4;
	}

	function changeColor4(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay4.style.fill = hex;
	}

	const overlay5 = document.getElementById("product-shape5");

var el5 = document.getElementsByClassName("c5");
	for (var i = 0; i < el5.length; i++) {
		el5[i].onclick = changeColor5;
	}

	function changeColor5(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay5.style.fill = hex;
	}