// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app
var app = express();

// Specify a port 
var port = 3002;

// Lets the server access the style sheet (style.css)
app.use(express.static(path.join(__dirname, '/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Module template export to retreive template data in javascript file
var form = require('./template.js');
console.log(form);

// Set up Handlebars for our template form 
// Similar to liquid?
// ==================================

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Routes
// ==================================
// shows our template form 
// forms = handlebars template html
// form = handlebars arguments list
app.get("/", function(req, res) {
	res.render("forms", { ics: form });
});


// Start Server
// ===================================
app.listen(port);
console.log("You are on a local host server on port " + port);


