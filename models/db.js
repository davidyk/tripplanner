var Sequelize = require("sequelize");
var db = new Sequelize("postgres://localhost:5432/tripplanner")

// var Place = require('./place');
// var Hotel = require('./hotel');
// var Restaurant = require('./restaurant');
// var Activity = require('./activity');

// Hotel.belongsTo(Place);
// Activity.belongsTo(Place);
// Restaurant.belongsTo(Place);

module.exports = db;

// {
//   hotel: Hotel,
//   place: Place,
//   restaurant: Restaurant,
//   activity: Activity,
//   db: db
// }
