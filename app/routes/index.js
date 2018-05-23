var express = require('express');
var router = express.Router();

var content_editor = require('./content-editor');
var auth = require('./auth');

var isAuth = require('../lib/middlewares').isAuth;

/* GET home page. */
router.get('/', isAuth, function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper', user: req.user });
});

module.exports = function (app) {

  app.use('/auth', auth);

  app.use('/content-editor', content_editor);

  return router;
}