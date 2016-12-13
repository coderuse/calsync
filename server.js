var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var server = express();

server.set('port', process.env.PORT || 3000);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'build')));

// db related
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/calsync');

// make db accessible to all requests
server.use(function(req,res,next){
  req.db = db;
  next();
});

// no stacktraces leaked to the user
// server.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

/// catch 404 and forwarding to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

var routes = require('./routes/index');
server.use('/api', routes);

// https://developers.google.com/google-apps/calendar/quickstart/nodejs

http.createServer(server).listen(server.get('port'), function(){
  console.log("Express server listening on port " + server.get('port'));
});