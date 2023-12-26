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

				const blockID = anchor.getAttribute('href').substring(1);

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		})
	}

	const linkTo = document.querySelector('.main__button');

	linkTo.addEventListener("click", function (e) {
		e.preventDefault();
		document.getElementById('contacts').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	});

	// Работает с объектами с класом ._lazy
	const lazyMedia = new LazyLoad({
		elements_selector: '[data-src],[data-srcset]',
		class_loaded: '_lazy-loaded',
		use_native: true
	});




	function initSliders() {
		// Перечень слайдеров
		// Проверяем, есть ли слайдер на стронице
		if (document.querySelector('.video-block__slider')) { // Указываем скласс нужного слайдера
			// Создаем слайдер
			new Swiper('.video-block__slider', { // Указываем скласс нужного слайдера
				slidesPerView: 1,
				spaceBetween: 20,
				speed: 800,
				//allowTouchMove: true,
				freeMode: true,
				//loop: true,
				 preloadImages: false,
				 lazy: true,

				//effect: 'fade',
				// autoplay: {
				// 	delay: 3000,
				// 	disableOnInteraction: false,
				// },
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				},
				
			});
		}
	}

	window.addEventListener("load", function (e) {
		// Запуск инициализации слайдеров
		initSliders();
	});



	const galleries = document.querySelectorAll('[data-gallery]');
	if (galleries.length) {
		let galleyItems = [];
		galleries.forEach(gallery => {
			galleyItems.push({
				gallery,
				galleryClass: lightGallery(gallery, {
					// plugins: [lgZoom, lgThumbnail],
					licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
					speed: 500,
				})
			})
		});
	}


});






