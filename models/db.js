var Sequelize = require("sequelize");
var db = new Sequelize("postgres://localhost:5432/tripplanner")

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongstTo(Place);
Activity.belongstTo(Place);
Restaurant.belongstTo(Place);

module.exports = {
  hotel: Hotel,
  place: Place,
  restaurant: Restaurant,
  activity: Activity,
  db: db
}
