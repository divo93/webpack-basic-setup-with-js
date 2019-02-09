import './style.css'
import print from './print.js'

function component () {
	let element = document.createElement("div");
	let btn = document.createElement("button");
	element.innerHTML = ("Hi Webpack");
	element.classList.add('hello')

	btn.innerHTML = "Click";
	btn.onclick = print;

	element.appendChild(btn)
	return element;
}

document.body.appendChild(component())
