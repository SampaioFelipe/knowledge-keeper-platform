var express = require('express');
var router = express.Router();

var content_editor = require('./content-editor');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper' });
});

module.exports = function (app) {

  app.use('/content-editor', content_editor(app));

  return router;
}