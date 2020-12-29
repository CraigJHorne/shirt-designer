const overlay = document.getElementById("product-shape");

const overlay2 = document.getElementById("product-shape2");

var el = document.getElementsByClassName("color");
	for (var i = 0; i < el.length; i++) {
		el[i].onclick = changeColor;
	}

	function changeColor(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay.style.fill = hex;
	}

var el2 = document.getElementsByClassName("color2");
	for (var i = 0; i < el2.length; i++) {
		el2[i].onclick = changeColor2;
	}

	function changeColor2(e) {
		let hex = e.target.getAttribute("data-hex");
		overlay2.style.fill = hex;
	}