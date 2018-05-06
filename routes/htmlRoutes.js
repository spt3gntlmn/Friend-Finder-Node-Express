var path = require("path");

module.exports = function (app) {
  // ---------------------------------------------------------------------------

  app.get("/servey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/servey.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
