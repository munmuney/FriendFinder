// ---------- Dependencies ---------- //s
var express = require("express");
var bodyParser = require("body-parser");

// ----- Express Config ----- //
var app = express();

// ----- Initial Port ----- //
var PORT = process.env.PORT || 8080;

// ----- Server interpret data sent ----- //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ----- Pathing Static Files----- //
app.use(express.static('app/public'));


// ---------- Router ---------- //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ---------- Listener ---------- //
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});