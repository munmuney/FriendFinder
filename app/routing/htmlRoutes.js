// ---------- Dependencies ---------- //
var path = require("path");

// ---------- Routing ---------- //
module.exports = function(app) {

    //----- HTML GET Requests to home ----- //
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //----- HTML GET Requests to survey ----- //
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //----- no matching route, then default to home ----- //
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};