console.log("file olark-control.js is loaded");

// ****************************** OLARK CHAT BOX ******************************

// on initial page load
// hide Olark on screen sizes 595px or smaller
// show the Olark box on larger screens when page scrolls
$(window).load(function() {
	if ($(window).width() < 595) {
		olark('api.box.hide');
	} else {
		$(window).scroll(function() {
			olark('api.box.show');
		});
	}
});

// do same thing on window resize
$(window).resize(function() {
	var currentWidth = $(this).width();
	if(currentWidth < 595 ) {
		olark('api.box.hide');
		// not sure why the box shows when the window is scrolled while smaller,
		// but this fixes it
		$(window).scroll(function() {
			olark('api.box.hide');
		});
	} else {
		$(window).scroll(function() {
			olark('api.box.show');
		});
	}
});
	

// use icon in footer to expand & minimize the olark chatbox
var olarkBoxShrink = true;

showOrHide = function(){
	if (olarkBoxShrink === true){
		olark('api.box.expand');
		olarkBoxShrink = false;
	} else {
		olark('api.box.shrink');
		olarkBoxShrink = true;
	}
};

