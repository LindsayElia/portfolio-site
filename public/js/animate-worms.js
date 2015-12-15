console.log("file animate-worms.js is loaded");

// Forked from [Tim Holman](http://codepen.io/tholman/)'s Pen 
// [Draw worm](http://codepen.io/tholman/pen/EpfLs/)

// I ADDED THIS
$.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        /* For opera: */
        document.documentElement.clientHeight
    );
};

// I ADDED THIS
var pageHeight = $.getDocHeight();
var pageWidth = $(document).width();
// console.log("page height : ", pageHeight);
// console.log("page width : ", pageWidth);


// DRAW ANIMATION ON MOUSEOVER
function DrawWorm(){
  
	var canvas;
	var context;
	var width;
	var height;

	// starting position for animation
	var mouse = {x: 10, y: window.innerHeight/2};
	console.log("VAR mouse - ", mouse);

	// Expose the mouse to demo the app.
	this.mouse = mouse;
	console.log("THIS.mouse - ", this.mouse);

	var interval;
	var vms = [];
	var MAX_NUM = 100;
	var N = 80;
	
	var px = window.innerWidth/2;
	var py = window.innerHeight;

	this.initialize = function(){
		canvas  = document.getElementById("canvas");
		context = canvas.getContext('2d');

		width = pageWidth;
		height = pageHeight;

		canvas.width = width;
		canvas.height = height;
		canvas.addEventListener('touchmove', TouchMove, false);
		canvas.addEventListener('mousemove', MouseMove, false);
		// erases lines on click
		canvas.addEventListener('click', MouseDown, false);
		//Set interval - Bad?
		var interval = setInterval(Draw, 20);

		// I ADDED THIS
		// this resizes the canvas if the window is resized
		window.addEventListener('resize', doTheResize, false);
	};
	
	// trying out some resize code...
	// this resizes the canvas if the window is resized
	function doTheResize(){
		canvas.width = $(document).width();
		// console.log("new width: ", canvas.width);
		canvas.height = $.getDocHeight();
		// console.log("new height: ", canvas.height);
	}

	var Draw = function(){
		var len = vms.length;
		var i;
		
		for (i = 0; i < len; i++){
			var o = vms[i];
			if (o.count < N){
				DrawWorm(o);
				o.count++;				
			//This looks a tad hacky - modifying the loop from within
			} else {
				len--;
				vms.splice(i, 1);
				i--;
			}	
		}
		
		Check();
	};
	
	// CHANGE? - Not sure why the function name is a duplicate?
	// Takes a worm (obj) param
	var DrawWorm = function (obj){

		if (Math.random() > 0.9){
			obj.tmt.rotate(-obj.r * 2);
			obj.r *= -1;
		}
		
		obj.vmt.prependMatrix(obj.tmt);
			
		var cc1x = -obj.w * obj.vmt.c + obj.vmt.tx;
		var cc1y = -obj.w * obj.vmt.d + obj.vmt.ty;
		
		var pp1x = (obj.c1x + cc1x) / 2;
		var pp1y = (obj.c1y + cc1y) / 2;
		
		var cc2x = obj.w * obj.vmt.c + obj.vmt.tx;
		var cc2y = obj.w * obj.vmt.d + obj.vmt.ty;
		
		var pp2x = (obj.c2x + cc2x) / 2;
		var pp2y = (obj.c2y + cc2y) / 2;
		
		context.fillStyle = '#D6CC4E';	// this is a gray, #000000 would be pure black
		context.strokeStyle = '#D6CC4E';  // doesn't seem to matter??
		context.beginPath();

		context.moveTo(obj.p1x , obj.p1y);
		context.quadraticCurveTo(obj.c1x, obj.c1y, pp1x, pp1y);
		
   		context.lineTo(pp2x, pp2y);
   		
   		context.quadraticCurveTo(obj.c2x, obj.c2y, obj.p2x, obj.p2y);
   		
		context.closePath();
		context.fill();	
	
	    obj.c1x = cc1x;
        obj.c1y = cc1y;
        obj.p1x = pp1x;
        obj.p1y = pp1y;
        obj.c2x = cc2x;
        obj.c2y = cc2y;
        obj.p2x = pp2x;
        obj.p2y = pp2y;
	};
	
	var Check = function(){
		var x0 = mouse.x;
		var y0 = mouse.y;
		var vx = x0 - px;
		var vy = y0 - py;	
		var len = Math.min(Magnitude(vx, vy), 50);  // fence Spirals has `+ 8` here
	
		if (len < 10){
			return;
		}
		
		var matrix = new Matrix2D();		
		matrix.rotate((Math.atan2(vy, vx)));  // fence Spirals has a negative sign here before the Math...parens
		matrix.translate(x0, y0);
		
		createWorm(matrix, len);
		context.beginPath(); 
		context.strokeStyle = '#D6CC4E';  // this is a gray, #000000 would be pure black
   		context.moveTo(px, py);
   		context.lineTo(x0, y0);
   		context.stroke();
   		context.closePath();
   		
   		px = x0;
   		py = y0;
   	
		//More logic here for afterwards?
	};
	
	var createWorm = function(mtx, len){
		var angle = Math.random() * (Math.PI/6 - Math.PI/64) + Math.PI/64;
		
		if(Math.random() > 0.5){
			angle *= -1;		
		}
		
		var tmt = new Matrix2D();	
		tmt.scale(0.95, 0.95);
		tmt.rotate(angle);	  // fence Spirals has this line commented out		
		tmt.translate(len, 0);  // fence Spirals has '12' instead of 'len'
		
		var w = 0.5;

		var obj = new Worm();
 
		obj.c1x = (-w * mtx.c + mtx.tx);
		obj.p1x = (-w * mtx.c + mtx.tx); 	
		obj.c1y = (-w * mtx.d + mtx.ty);
		obj.p1y = (-w * mtx.d + mtx.ty);		
		obj.c2x = (w * mtx.c + mtx.tx);
		obj.p2x = (w * mtx.c + mtx.tx);		 
		obj.c2y = (w * mtx.d + mtx.ty);
		obj.p2y = (w * mtx.d + mtx.ty); 
		obj.vmt = mtx;
		obj.tmt = tmt;
		obj.r = angle;
		obj.w = len/20;
		obj.count = 0;
 		
		vms.push(obj);
		
		if (vms.length > MAX_NUM){
			vms.shift();
		}
	};
	
	var Worm = function(){	
		this.c1x = null;
		this.c1y = null;
		this.c2x = null;
		this.c2y = null;
		this.p1x = null;
		this.p1y = null;
		this.p2x = null;
		this.p2y = null;
		
		this.w = null;
		this.r = null;
		
		this.count = null;
		this.vmt = null;
		this.tmt = null;	
	};
	
	// var fadeScreen = function(){
	// 	context.fillStyle = 'rgba(255, 255, 255, 0.02)';
	// 	context.beginPath();
	// 	context.rect(0, 0, width, height);
	// 	context.closePath();
	// 	context.fill();	
	// };
	

	var TouchMove = function(e) {
		e.preventDefault();
    	mouse.x = e.targetTouches[0].pageX - canvas.offsetLeft;
    	mouse.y = e.targetTouches[0].pageY - canvas.offsetTop;
	};
	
	var MouseMove = function(e) {
        mouse.x = e.layerX - canvas.offsetLeft;
        mouse.y = e.layerY - canvas.offsetTop;
        // console.log("logging mouse X - ", mouse.x);
        // console.log("logging mouse Y - ", mouse.y);
	};
	
	// Clear the screen
	var MouseDown = function(e) {
		e.preventDefault();
		canvas.width = canvas.width;
		vms = [];
	};

	//Returns Magnitude
	var Magnitude = function(x, y){
		return Math.sqrt((x * x) + (y * y));
	};
			
}

// BRINGING IN MATRIX 2D LIBRARY FROM matrix.js file
 

var app, interval, count;

function demoApp() {
	count++;
	if (count % 2 === 0){
		app.mouse.y -= 40;  
	} else {
		app.mouse.y += 40; 
	}

	if (count > 30) {
		window.clearInterval( interval );
	}
}

setTimeout( function() {
	app = new DrawWorm();
	app.initialize();
	count = 0;
	interval = setInterval( demoApp, 20 );
}, 10);


