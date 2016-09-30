var Sequelize = require("sequelize");
var database = require("./db");
var db = database.db;

console.log("database", database);
console.log("db", db);

module.exports = db.define("place", {
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
