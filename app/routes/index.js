var express = require('express');
var router = express.Router();

var content_editor = require('./content-editor');
var auth = require('./auth');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper' });
});

module.exports = function (app) {

  app.use('/auth', auth);

  app.use('/content-editor', content_editor);

  return router;
}