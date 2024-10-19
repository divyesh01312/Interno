// JavaScript Document
$(document).ready(function () {
	$('.navbar-toggler').on('click', function () {
		$('.navbar-toggler').toggleClass('active');
	});
	$('.navbar-toggler').on('click', function () {
		if ($(this).hasClass('active')) {
			$('html').css('overflow', 'hidden');
		}
		else {
			$('html').css('overflow', '');
		}
	});
	// $('.carouselTicker').carouselTicker({
	

	// );
	// $('.counter').counterUp();
	$(".regular").slick({
		dots: false,
		arrows: false,
		// fade: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint:400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
		
		]
	});
});

