import './style.css'

function component () {
	let element = document.createElement("div");
	element.innerHTML = ("Hi Webpack");
	element.classList.add('hello')
	return element;
}

document.body.appendChild(component())
