function collapseNav() {
	document.getElementById("navigation-expanded").style.display="none";
	document.getElementById("navigation-collapsed").style.display="block";
	document.getElementById("content").style.width="95%";
}

function expandNav() {
	document.getElementById("navigation-expanded").style.display="block";
	document.getElementById("navigation-collapsed").style.display="none";
	document.getElementById("content").style.width="80%";
}