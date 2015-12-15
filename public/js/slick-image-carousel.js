console.log("file slick-image-carousel.js is loaded");

// ****************************** SLICK IMAGE CAROUSEL ******************************


$(document).ready(function(){

	console.log("hello from slick function");


	// CREATING A CAROUSEL FOR EACH SET OF IMAGES, SO THAT DOTS & ARROWS DON'T APPLY TO MORE THAN ONE GROUP OF IMAGES
	// IS REDUNDANT BUT NOT AN ISSUE SLICK IS DESIGNED FOR - https://github.com/kenwheeler/slick/issues/1103
	// https://github.com/kenwheeler/slick/pull/1771 - for example of how to style arrows in line with dots
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


