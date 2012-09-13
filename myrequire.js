
function require(name) {
	var head = document.getElementsByTagName('head')[0],
		script = document.createElement('script'),
		url = name + ".js";
	
	script.src = url;
	head.appendChild(script);
}
