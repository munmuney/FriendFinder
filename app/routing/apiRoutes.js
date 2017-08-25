// ---------- Dependencies ---------- //
var friends = require("../data/friends");


// ---------- Routing ---------- //
module.exports = function(app) {

	//----- HTML GET Requests to home -----//
	app.get("/api/friends", function(req, res) {
		res.json(friends); // display JSON //
	});

	// ----- HTML POST Request to api ----- //
  	app.post("/api/friends", function(req, res) {
        var userObj = req.body;
        console.log(userObj);

        // ----- Calculations for Match ----- //
        var index = 0;
        var setScore = 50;

        for (i = 0; i < friends.length; i++) {

        	var totalDifference = 0;
            for (j = 0; j < userObj.scores.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - userObj.scores[j]);       	
            }
            if (totalDifference <= setScore) {
                index = i;
                setScore = totalDifference;
            }
        }
        friendMatch = friends[index];

        // ----- Push into friends Array ----- //
        friends.push(userObj);
        res.json(friendMatch);
    });

}