$(function () {

	$('.about-us__btn, .works__btn, .news-arrows, .news-arrows-team, .touch__btn').on('click', function (e) {
		e.preventDefault();
	});

	$(".header__burger-icon").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass('burger-open')) {
			$(".header__nav").css("transform", "translate(0, 0)");
			$(this).css("display", "none");
			$(".burger-close").css("display", "block");
		} else {
			$(".header__nav").removeAttr('style');
			$(this).removeAttr('style');
			$(".burger-open").css("display", "block");
		}
	});


	$(window).on('resize', function () {
		if ($(window).width() > 768) {
			$(".burger-open").removeAttr('style');
			$(".burger-close").removeAttr('style');
			$(".header__nav").removeAttr('style');
		}
	});


	$('.about-us__cards').masonry({
		// options
		itemSelector: '.about-us__card',
		columnWidth: 0
	});


	$('.works__slider').slick({
		infinite: true,
		speed: 1000,
		dots: true,
		arrows: false
	});
	$('.news-arrows').on('click', function () {
		if ($(this).hasClass("news-arrows-prev")) {
			$('.works__slider').slick("slickPrev");
		} else {
			$('.works__slider').slick("slickNext");
		}
	});

	$('.team__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
	$('.news-arrows-team').on('click', function () {
		if ($(this).hasClass("news-arrows-prev-team")) {
			$('.team__slider').slick("slickPrev");
		} else {
			$('.team__slider').slick("slickNext");
		}
	});


	var directionsService = new google.maps.DirectionsService(), directionsDisplay = new google.maps.DirectionsRenderer(),
		marick = new google.maps.LatLng(-7.935560, 112.632655),
		mapOptions = {
			zoom: 12,
			center: marick
		},
		map = new google.maps.Map($('.touch__map')[0], mapOptions);
	var marker = new google.maps.Marker({
		position: marick,
		map: map,
		icon: {
			url: 'img/Pin.png',
			scaledSize: new google.maps.Size(47, 53)
		}
	});
	directionsDisplay.setMap(map);

	google.maps.event.addDomListener(window, "resize", function () {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});

	//навигация
	$(".header__link, .btn-top").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top,
			parent = $(this).closest('.header__nav');
		$('body,html').animate({ scrollTop: top }, 1000);
		if (($(window).width() < 768) && ($(this).hasClass("header__link"))) {
			$(".burger-close").removeAttr('style');
			$(".header__nav").removeAttr('style');
			$(".burger-open").css("display", "block");
		}
	});
});


