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
        deltaScore += (Math.abs(parseInt(friendsArray[index1].scores[index2]) - parseInt(friendScore)));
      });
      console.log(deltaScore);

      friendScores.push(deltaScore);
    });

    friendScores.forEach((score, index) => {
      if (score <= friendScores[bestMatch]) {
        bestMatch = index;
        console.log(friendsArray[bestMatch]);
      }
    })

    let yourNewFriend = friendsArray[bestMatch];

    console.log(yourNewFriend);
    res.json(yourNewFriend);

    friendsArray.push(req.body);

  });

  // ---------------------------------------------------------------------------
  app.post("/api/clear", function () {
    // Empty out the arrays of data
    friends = [];

    console.log(friends);
  });
};
