document.getElementsByClassName
('circle').onclick = function () {
	myFunction();
	console.log('done');
};

function myFunction() {
	document.getElementByClassName('circle').style.display = 'none';
	console.log('ting done');
}
