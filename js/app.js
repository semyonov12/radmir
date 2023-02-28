document.addEventListener("DOMContentLoaded", function (event) {

	/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});


	// бургер меню
	let burger = document.querySelector(".menu__burger");
	let menu = document.querySelector(".menu");
	let body = document.querySelector("body");

	burger.addEventListener("click", function () {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		body.classList.toggle("lock");
	});

	const anchors = document.querySelectorAll('.menu__link');

	if (anchors.length) {
		anchors.forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				burger.classList.remove("active");
				menu.classList.remove("active");
				body.classList.remove("lock");

				const blockID = anchor.getAttribute('href').substr(1);

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		})
	}


});






