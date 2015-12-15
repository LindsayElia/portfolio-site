console.log("file slick-image-carousel.js is loaded");

// ****************************** SLICK IMAGE CAROUSEL ******************************

$(document).ready(function(){
  // $('.your-class').slick({
  //   setting-name: setting-value
  // });

	console.log("hello from slick function");

	$('.fade').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

});


