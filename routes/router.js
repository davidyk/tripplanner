var express = require("express");
var router = express.Router();
module.exports = router;
var models = require('../models/index')
var Activity = models.Activity;
var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Promise = require("bluebird");


router.get("/", function (req, res, next) {
     var foundHotel = Hotel.findAll({});
     var foundActivity = Activity.findAll({});
     var foundRestaurant = Restaurant.findAll({});

     Promise.all([foundHotel, foundActivity, foundRestaurant])
     .then(function(allPlaces) {
          var hotels = allPlaces[0];
          var activities = allPlaces[1];
          var restaurants = allPlaces[2];
          res.render("index", {hotels: hotels, activities: activities, restaurants: restaurants})
     })
     .catch(next);
});



