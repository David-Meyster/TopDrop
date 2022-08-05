function theme() {
	document.body.classList.toggle("dark-theme");
	let theme = document.body.classList.contains("dark-theme") ? "Light" : "Dark";
	document.getElementById("light-text").innerHTML = theme;
	localStorage.setItem("theme", theme);
}

function theme_init() {
	let theme = localStorage.getItem("theme") || "Dark";
	theme === "Light" ? document.body.classList.add("dark-theme") : document.body.classList.remove("dark-theme");
	document.getElementById("light-text").innerHTML = theme;
}
