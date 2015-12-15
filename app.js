// ____________REQUIRE NODE MODULES & SET MIDDLEWARE____________

// express - lets us use dynamic data within our views
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Tell our app where to find the slick JavaScript for the Portfolio page images
// not sure if this is best practice but it works
app.use("/slick", express.static(__dirname + "/node_modules/slick-carousel/slick"));

// serve-favicon - let's us use a custom image for the favicon
// I don't have a custom favison yet
// var favicon = require("serve-favicon");
// app.use(favicon(__dirname + "/public/img/file-name.png"));

// morgan - lets us log HTTP requests in terminal
var morgan = require("morgan");
app.use(morgan("tiny")); // less text in our logs??

// dotenv - lets us use SECRET global variables
require('dotenv').load();

// hide my email address for GitHub
var lindsayEmailAddress = process.env.LINDSAY_EMAIL;
console.log("my email >> ", lindsayEmailAddress);



// ____________ROUTES____________


// ROOT
app.get("/", function(req, res){
	res.redirect("/index");
});

// INDEX PAGE
app.get("/index", function(req, res){
	// console.log("req.url >> ", req.url);
	res.render("statics/index", {email:lindsayEmailAddress, path:req.url});
});

// ABOUT
app.get("/portfolio", function(req, res){
	// console.log("req.url >> ", req.url);
	res.render("statics/portfolio", {email:lindsayEmailAddress, path:req.url});
});

// RESUME
app.get("/resume", function(req, res){
	// console.log("req.url >> ", req.url);
	res.render("statics/resume", {email:lindsayEmailAddress, path:req.url});
});

// BLOG - HOSTED ON TUMBLR
app.get("/blog", function(req, res){
	res.redirect("http://blog.lindsayelia.com/");
});

// FALLBACK ROUTE
app.get("*", function(req, res){
	res.render("errors/404", {email:lindsayEmailAddress, path:req.url});
});



//____________START SERVER____________

// process.env.PORT is whatever port we tell Heroku as an environment variable
app.listen(process.env.PORT || 3000, function(){
	console.log("Server starting on port: 3000");
});


