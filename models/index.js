// // For reference; will not use file
Sequelize = require("sequelize")
var db = require('./db')

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
     db: db,
     Place: Place,
     Hotel: Hotel,
     Restaurant: Restaurant,
     Activity: Activity
}


// var Place = db.define("place", {
//   address: {
//     type: Sequelize.STRING
//   },
//   city: {
//     type: Sequelize.STRING
//   },
//   state: {
//     type: Sequelize.STRING
//   },
//   location: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT, Sequelize.FLOAT)
//   }
// });

// var Hotel = db.define("hotel", {
//   name: {
//     type: Sequelize.STRING
//   },
//   num_stars: {
//     type: Sequelize.INTEGER,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   },
//   amenities: {
//     type: Sequelize.STRING
//   }
// });

// var Activity = db.define("activity", {
//   name: {
//     type: Sequelize.STRING
//   },
//   age_range: {
//     type: Sequelize.STRING
//   }
// });

// var Restaurant = db.define("restaurant", {
//   name: {
//     type: Sequelize.STRING
//   },
//   cuisine: {
//     type: Sequelize.STRING
//   },
//   price: {
//     type: Sequelize.INTEGER,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   }
// });

// Hotel.belongsTo(Place);
// Activity.belongsTo(Place);
// Restaurant.belongsTo(Place);
