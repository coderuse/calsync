var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

// db related
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/calsync');

// make db accessible to all requests
app.use(function(req,res,next){
  req.db = db;
  next();
});

var indexRoute = require('./routes/index');
app.use('/', indexRoute);

var apiRoutes = require('./routes/api');
app.use('/api', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// https://developers.google.com/google-apps/calendar/quickstart/nodejs

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express app listening on port " + app.get('port'));
});