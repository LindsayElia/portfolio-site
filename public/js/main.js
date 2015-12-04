console.log("file main.js is loaded");


// show the chatbox when the page is scrolled
$( window ).scroll(function() {
  olark('api.box.show');
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







