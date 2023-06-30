// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function modal(present) {
	console.log('Modal Called');
	const modal = document.getElementById('myModal');
	const ad = document.getElementById("adoverlay");
	if (present == true) {
		modal.style.display = 'block';
		ad.style.display = 'block';
		console.log('Modal: Block');
	} else {
		modal.style.display = 'none';
		console.log('Modal: None');
	}
}

function info(present) {
	console.log("Info Called");
	const info = document.getElementById('info');
	if (present == true) {
		info.style.display = "block";
		console.log("Info Displayed");
	} else {
		info.style.display = "none";
		console.log("Info Hidden");
	}
}

function displayBox(present) {
	console.log('Modal Called');
	const suggestionsBox = document.getElementById('improvements');
	if (present == true) {
		suggestionsBox.style.display = 'block';
		console.log('Suggestions: Block');
	} else {
		suggestionsBox.style.display = 'none';
		console.log('Suggestions: None');
	}
}

// https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/
function toggleTheme() {
	const theme = document.getElementById('theme');
	if (theme.getAttribute('href') == 'assets/styles/light.css') {
		theme.setAttribute('href', 'assets/styles/dark.css');
	} else {
		theme.setAttribute('href', 'assets/styles/light.css');
	}
}

// https://stackoverflow.com/questions/18031410/javascript-if-time-is-between-7pm-and-7am-do-this
function defaultTheme() { 
	console.log(`Welcome to the cool kids club i guess
 Enjoy some cool ascii art.


██████╗░░█████╗░██╗░░██╗██╗███████╗██╗░░░██╗
██╔══██╗██╔══██╗██║░██╔╝██║██╔════╝╚██╗░██╔╝
██████╦╝███████║█████═╝░██║█████╗░░░╚████╔╝░
██╔══██╗██╔══██║██╔═██╗░██║██╔══╝░░░░╚██╔╝░░
██████╦╝██║░░██║██║░╚██╗██║██║░░░░░░░░██║░░░
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░
Written by Makai Pindell
`);

	const theme = document.getElementById('theme');
	const hour = new Date().getHours();
	
	if (hour >= 19 || hour <= 7) {
		theme.setAttribute('href', 'assets/styles/dark.css');
	} else {
		theme.setAttribute('href', 'assets/styles/light.css');
	}
}

function random(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// https://plainenglish.io/blog/how-to-copy-paste-text-into-clipboard-using-javascript
document.onload = () => {
	let pasteButton = document.getElementById("paste");
	pasteButton.onclick = () => {
		navigator.clipboard
			.readText()
			.then(
				(cliptext) =>
					(document.getElementById('text').innerText = cliptext),
				(err) => console.log(err);
			);
	})
});
