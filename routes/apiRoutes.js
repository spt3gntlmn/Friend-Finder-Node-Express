var friendsArray = require("../data/friends");

module.exports = function (app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    let wannaBeFriendScore = req.body.scores;
    let friendScores = [];
    let bestMatch = 0;

    friendsArray.forEach((friend, index1) => {
      let deltaScore = 0;

      wannaBeFriendScore.forEach((friendScore, index2) => {
        console.log(`Friends Array index: ${index2}.
        Friend score: ${friendScore}.`)

        console.log(`Friends Array scores: ${friendsArray[index1].scores[index2]}.`)
        // deltaScore += (Math.abs(parseInt(friendsArray.scores[index]) - parsenInt(friendScore)));
      });
      // console.log(deltaScore);

      friendsArray.push(deltaScore);
    });












    // console.log("I'm pushing to the friends array")
    // friends.push(req.body);
    // console.log(parseInt(req.body.scores[0]));
    // let sum = 0;
    // for (var i = 0; i < req.body.scores.length; i++) {
    //   friends.push(req.body.scores[i]);
    //   sum = sum + parseInt(req.body.scores[i]);
    //   var avg = sum / (i + 1);
    // }
    // console.log(`This is the average score: ${avg}.
    // This is the friends array: ${friends}.`);
    // console.log(friends);
    res.send("200");
  });

  // ---------------------------------------------------------------------------
  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
  });
};
