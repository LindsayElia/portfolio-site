console.log("file slick-image-carousel.js is loaded");

// ****************************** SLICK IMAGE CAROUSEL ******************************


$(document).ready(function(){

	console.log("hello from slick function");


	// Add & remove the 'clearfix' class to the divs that need it on larger screen sizes
	// removing it on smaller screens allows the image to resize - slick was breaking the resize the 
	// way I had it styled
	var currentWidth;

	$(window).load(function() {
		currentWidth = $(window).width();
		if (currentWidth > 785) {
			console.log("a - width: ", currentWidth);
			$(".container-project-group").addClass("clearfix");
		} else {
			console.log("b - width: ", currentWidth);
			$(".container-project-group").removeClass("clearfix");
		}
	});

	$(window).resize(function() {
		currentWidth = $(this).width();
		if(currentWidth > 785 ) {
			console.log("c - width: ", currentWidth);
			$(".container-project-group").addClass("clearfix");
		} else {
			console.log("d - width: ", currentWidth);
			$(".container-project-group").removeClass("clearfix");
		}
	});



	// Creating a carousel for each set of images, so that dots and arrows don't apply to more than one group of images
	// It's redundant but not an issue Slick is designed to handle - https://github.com/kenwheeler/slick/issues/1103
	// For example of how to style arrows in line with dots: https://github.com/kenwheeler/slick/pull/1771
	var dotsArrows1 = $(".slick-dots-and-arrows-one"),
		dotsArrows2 = $(".slick-dots-and-arrows-two"),
		dotsArrows3 = $(".slick-dots-and-arrows-three"),
		dotsArrows4 = $(".slick-dots-and-arrows-four"),
		dotsArrows5 = $(".slick-dots-and-arrows-five"),
		dotsArrows6 = $(".slick-dots-and-arrows-six");


	$(".slick-fade-one").slick({
		infinite: true,			// Infinite looping: next image after last image is the first image
		speed: 500,				// Transition speed
		fade: true,
		cssEase: "linear",
		accessibility: true, 	// Enables tabbing and arrow key navigation
		dots: true,
		arrows: true,			// Enable Next/Prev arrows
		appendArrows: dotsArrows1,
		appendDots: dotsArrows1,
		swipe: true				// Enables touch swipe
	});

	$(".slick-fade-two").slick({
		infinite: true,	
		speed: 500,	
		fade: true,
		cssEase: "linear",
		accessibility: true, 
		dots: true,
		arrows: true,			
		appendArrows: dotsArrows2,
		appendDots: dotsArrows2,
		swipe: true	
	});

	$(".slick-fade-three").slick({
		infinite: true,	
		speed: 500,	
		fade: true,
		cssEase: "linear",
		accessibility: true, 
		dots: true,
		arrows: true,			
		appendArrows: dotsArrows3,
		appendDots: dotsArrows3,
		swipe: true	
	});

	$(".slick-fade-four").slick({
		infinite: true,	
		speed: 500,	
		fade: true,
		cssEase: "linear",
		accessibility: true, 
		dots: true,
		arrows: true,			
		appendArrows: dotsArrows4,
		appendDots: dotsArrows4,
		swipe: true	
	});

	$(".slick-fade-five").slick({
		infinite: true,	
		speed: 500,	
		fade: true,
		cssEase: "linear",
		accessibility: true, 
		dots: true,
		arrows: true,			
		appendArrows: dotsArrows5,
		appendDots: dotsArrows5,
		swipe: true	
	});

	$(".slick-fade-six").slick({
		infinite: true,	
		speed: 500,	
		fade: true,
		cssEase: "linear",
		accessibility: true, 
		dots: true,
		arrows: true,			
		appendArrows: dotsArrows6,
		appendDots: dotsArrows6,
		swipe: true	
	});

});


