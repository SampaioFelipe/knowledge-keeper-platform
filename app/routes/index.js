let express = require('express');
let router = express.Router();

let content_editor = require('./content-editor');
let auth = require('./auth');

let isAuthenticated = require('../lib/middlewares').isAuthenticated;

/* GET home page. */
router.get('/', isAuthenticated, function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper', user: req.user });
});

module.exports = function (app) {

  app.use('/auth', auth);

  app.use('/content-editor', content_editor);

  return router;
}