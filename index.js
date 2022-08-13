// Make sure DOM elements have the necessary properties ready
window.addEventListener('load', () => {
	let answers = document.getElementsByClassName('qa-answer');
	for (let i = 0; i < answers.length; i++) {
		answers[i].style.display = 'none';
	}
});

// Procedure to toggle Q&A answers
function toggleQA(callee) {
	if (callee.childNodes[3].style.display == 'none') {
		callee.childNodes[1].setAttribute('style', `
			color: hsl(238, 29%, 16%);
			font-weight: bold;
		`);
		callee.childNodes[3].style.display = 'inline';
	} else {
		callee.childNodes[1].setAttribute('style', `
			color: hsl(237, 12%, 33%);
			font-weight: regular;
		`);
		callee.childNodes[3].style.display = 'none';
	}
}
