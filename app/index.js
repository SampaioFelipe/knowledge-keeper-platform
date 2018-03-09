var path = require('path');

/**
 * App requiments
 */
var express = require('express');   // Web framework
var routes =  require('./routes');  // URL routing specification
var config = require('./config');

/**
 * App configuration
 */
var app = express();

config.middlewares(app);
config.view_engine(app);

/**
 * Staticfile folders
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use('/content_tools', express.static(__basedir + '/node_modules/ContentTools/build/'));

/**
 * Routing mapping
 */
app.use('/', routes(app));


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
  res.render('error.html');
});

// elastic.indexExists().then(function (exists) {  
//   if (exists) {
//     return elastic.deleteIndex();
//   }
// }).then(function () {
//   return elastic.initIndex().then(elastic.initMapping);
// });

module.exports = app;
