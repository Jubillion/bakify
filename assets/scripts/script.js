function begin() { // Working
	//stat();
	setTimeout(stat, 0);
	//bake();
}

function stat() {
	modal(true);
	const div = document.getElementById('status');
	var paragraph = document.getElementById('text').textContent;
	let i = 0;
	let interval = setInterval(() => {
		div.innerHTML = (Math.round((i/100)*100) + "%");
		i++;
		if (i == 100) {
		  clearInterval(interval);
		  bake();
		}
	  }, paragraph.length/100);
} // Working

// https://stackoverflow.com/questions/32389568/search-for-a-string-from-a-textbox-in-a-textarea
function bake() {
	console.log('Called callSuggestion');
	displayBox(true);
	searchResults.length = 0;
	searchReplacements.length = 0;
	var paragraph = document.getElementById('text').textContent; // <--- Global Variable ????
	document.getElementById('improvements').replaceChildren([]);
	for (i = 0; i < neverWords.length; i++) {
		console.log('Bake Iteration' + neverWords[i][0] + " " + i);
		if (neverWords.length > 0 && paragraph.indexOf(neverWords[i][0]) > -1) { // <-- idk what this does lol
			console.log('True Bake Iteration' + neverWords[i][0]);
			searchResults.push(neverWords[i][0]);
			let l = neverWords[i][1].length;
			let r = random(0,l-1);
			searchReplacements.push(neverWords[i][1][r]);
			suggestTab(neverWords[i][0], neverWords[i][1][r], i);
		}
	}
	for (i = 0; i < searchResults.length; i++) { //Highlight
		subjectGlobalized = new RegExp(searchResults[i], 'gi');
		console.log(subjectGlobalized + ' ' + searchResults[i]);
		const highlighted = paragraph.replace(subjectGlobalized, '</span><span class=\'word\'>' + searchResults[i] + '</span><span class=\'other\'>');
		var paragraph = highlighted;
	}
	document.getElementById('text').innerHTML = paragraph;
	console.log('Final array: ' + searchResults);
	console.log('Final solutions: ' + searchReplacements);
	if (searchResults.length == 0) { //Handle No Neverwords
		const thing = document.createElement('div');
		thing.innerHTML = `<div class=\"suggestion\"><h2>All Good!</h2><p>We didn't find any errors :) </p><br></div>`;
		document.getElementById('improvements').appendChild(thing);
	}
	modal(false);
} // Working

function recalculate() {
	console.log('Recalculating');
	const recalculatedResults = [];
	paragraph = document.getElementById('text').textContent;
	for (i = 0; i < neverWords.length; i++) {
		if (neverWords.length > 0 && paragraph.indexOf(neverWords[i][0]) > -1) {
			recalculatedResults.push(neverWords[i][0]);
		}
	}
	for (i = 0; i < recalculatedResults.length; i++) {
		subjectGlobalized = new RegExp(recalculatedResults[i], 'gi');
		const highlighted = paragraph.replace(subjectGlobalized, '</span><span class=\'word\'>' + recalculatedResults[i] + '</span><span class=\'other\'>');
		var paragraph = highlighted;
	}
	document.getElementById('text').innerHTML = paragraph;
}

function suggestTab(word, suggest, location) {
	const title = word;
	const paragraph = suggest;
	const position = location;
	const thing = document.createElement('div');
	thing.innerHTML = `<div class=\"suggestion\"><h2>${title}</h2><p>${paragraph}</p><br><button style="display: inline;" onclick='this.parentNode.remove(this); acceptEdit("${title}", "${paragraph}", ${position}); recalculate();'>Accept</button><button style="display: inline;" onclick='this.parentNode.remove(this)'>Reject</button></div>`;
	document.getElementById('improvements').appendChild(thing);
} // Working (Sort of)

function acceptEdit(word, suggest, location) {
	console.log('Called acceptEdit()');
	const paragraph = document.getElementById('text').textContent;
	wordGlobalized = new RegExp(word, 'gi');
	console.log("Random Word: " + wordGlobalized);
	if (suggest == ' REMOVE ') {
		var fixed = paragraph.replace(wordGlobalized, ' ');
	} else {
		var fixed = paragraph.replace(wordGlobalized, suggest);
	}
	document.getElementById('text').innerHTML = fixed;
} // Working
