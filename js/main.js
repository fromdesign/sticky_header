var header = document.querySelector('header'),
	headerHeight = header.clientHeight,
	emptyArea = document.querySelector('.empty-area'),
	emptyHeight = emptyArea.clientHeight;

window.addEventListener('scroll', function () {
	var scrollOffset = window.pageYOffset;
	if (scrollOffset > emptyHeight + headerHeight) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
});

var logo = document.querySelector('.logo');

logo.addEventListener('dblclick', function (e) {
	e.preventDefault();
	header.classList.add('edit');
});

var input = document.querySelector('input');
var spanInLogo = document.querySelector('.logo span');

input.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		var text = this.value;
		spanInLogo.innerText = text;
		this.value = '';
		header.classList.remove('edit');
	}
});