let express = require('express');
let router = express.Router();

let isAuthenticated = appRequire('lib/middlewares').isAuthenticated;

/* Routes import*/
let auth = require('./auth');
let content_editor = require('./content-editor');
let knowledge = require('./knowledge');


/* GET home page. */
router.get('/', isAuthenticated, function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper', user: req.user });
});

module.exports = function (app) {

  app.use('/auth', auth);

  app.use('/content-editor', content_editor);

  app.use('/knowledge', knowledge);

  return router;
}