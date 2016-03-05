// *Modules*
  var express = require('express');
  var mongoose = require('mongoose');
  var port = process.env.PORT || 8080;
  var logger = require('morgan');
  var favicon = require('serve-favicon');
  var bodyParser = require('body-parser');
  var sendgrid_username = process.env.SENDGRID_USERNAME;
  var sendgrid_password = process.env.SENDGRID_PASSWORD;
  var options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
  } ;
  var methodOverride = require('method-override');
  var nodemailer = require('nodemailer');
  var sgTransport = require('nodemailer-sendgrid-transport');
  var app = express();
  var database = require('./config/database');

// *Configuration*
  // Connect to our mongoDB database
  // Enter in your own credentials in config/database.js for DB url
  mongoose.connect(database.url);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function callback () {
    console.log("Scrolls are ready to be written!!!");
  });

// *Middleware*
  app.use(favicon(__dirname + '/favicon.ico'));
  app.use(logger('dev'));

  // Parse application/json
  app.use(bodyParser.json());

  // Parse application/vnd.api+json as json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

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

// *For Email*
  var mailer = nodemailer.createTransport(sgTransport(options));

  app.post('/api/email', function(req, res) {
    var mailOptions = {
      to: ['cmsgoboston41@gmail.com', req.body.to],
      from: req.body.from,
      fromname: req.body.fromname,
      subject: req.body.subject,
      text: req.body.text
    };
    mailer.sendMail(mailOptions, function(err, res) {
      if(err) {
        console.log(err)
      }
      console.log(res);
    });
  });

// *App Start*
  // http://localhost:8080
  app.listen(port);
  console.log('Connected to port ' + port);
  exports = module.exports = app;
