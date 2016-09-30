var Express = require('express');
var app = new Express();
var Promise = require("bluebird");
var db = require("./models/db.js");

var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var models = require('./models');

var router = require("./routes/router");
// var Page = models.Page;
// var User = models.User;

// var wikiRouter = require('./routes/wiki');
// var usersRouter = require('./routes/users');

app.engine('html', swig.renderFile);
swig.setDefaults({
  cache: false
});

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(Express.static(__dirname + '/node_modules'));
app.use(Express.static(__dirname + '/public'));



app.use('/', router);

// app.get('/', function (req, res) {
//     res.redirect('/wiki');
// });


// User.sync()
//     .then(function () {
//         return Page.sync();
//     })
//     .then(function () {
//         app.listen(3001, function () {
//             console.log('Server is listening on port 3001!');
//         });
//     });



app.get('/', function(req, res, next) {
  console.log("Ya server is RUNNIN");
})

app.listen(8080, function(req, res, next) {
  console.log("Server running on 8080...");
});

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);

  res.send("./views/error.html");
  // res.render(
  //   // ... fill in this part
  // );
});
