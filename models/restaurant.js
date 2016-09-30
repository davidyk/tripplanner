var Sequelize = require("sequelize");
var database = require("./db");
var db = database.db;

module.exports = db.define("restaurant", {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});
