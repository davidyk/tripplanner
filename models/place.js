var Sequelize = require("sequelize");
var db = require("./db");


var Place = db.define("place", {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT, Sequelize.FLOAT)
  }
});

module.exports = Place;
