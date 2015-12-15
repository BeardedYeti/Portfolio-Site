// *Modules*
  var express = require('express');
  var mongoose = require('mongoose');
  var port = process.env.PORT || 8080;
  var logger = require('morgan');
  var favicon = require('serve-favicon');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var app = express();
  //var database = require('./config/database');

// *Configuration*

  // Connect to our mongoDB database
  // Enter in your own credentials in config/db.js for DB url
  mongoose.connect('mongodb://127.0.0.1:27017/blog');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function callback () {
    console.log("Scrolls are ready to be written!!!");
  });

  app.use(favicon(__dirname + '/favicon.ico'));
  app.use(logger('dev'));

  // Parse application/json
  app.use(bodyParser.json());

  // Parse application/vnd.api+json as json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parse raw text
  app.use(bodyParser.text());

  // Override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
  app.use(methodOverride());

  // Set the static files location /client/img will be /img for users
  app.use(express.static(__dirname + '/client'));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, HEAD, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, content-type, Accept');
  next();
  });

// *Routes*
  require('./app/routes.js')(app);


// *App Start*
  // http://localhost:8080
  app.listen(port);
  console.log('Connected to port ' + port);
  exports = module.exports = app;
