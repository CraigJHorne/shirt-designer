let el = document.getElementsByClassName("color");
	for (let i = 0; i < el.length; i++) {
		el[i].onclick = changeColor;
	}

	function changeColor(e) {
		let hex = e.target.getAttribute("data-hex");
		let path = e.target.getAttribute("data-path");

		const overlay = document.getElementById(path);
		overlay.style.fill = hex;
	}


