// var Sequelize = require("sequelize");
var db = require("./db");
// var db = database.db;

var Sequelize = require("sequelize");
// var db = new Sequelize("postgres://localhost:5432/tripplanner")

var Hotel = db.define("hotel", {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

module.exports = Hotel;
