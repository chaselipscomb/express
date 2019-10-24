
var noteData = require("../data/noteData");
var noteListData = require("../data/notelistData");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {

    if (noteData.length < 5) {
      noteData.push(req.body);
      res.json(true);
    }
    else {
      noteListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    noteData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
