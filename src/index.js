function component () {
	let element = document.createElement("div");
	element.innerHTML = ("Hi Webpack");
	return element;
}

document.body.appendChild(component())
