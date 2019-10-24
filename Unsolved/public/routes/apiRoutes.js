var notes = require("journal.json");

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
      res.json(tableData);
    });