var Sequelize = require("sequelize");
var database = require("./db");
var db = database.db;

module.exports = db.define("hotel", {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

