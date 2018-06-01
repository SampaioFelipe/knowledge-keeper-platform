const express = require('express');
const router = express.Router();

const isAuthenticated = appRequire('lib/middlewares').isAuthenticated;

/* Routes import */
const auth = require('./auth');
const views = require('./views');
const api = require('./api');


module.exports = function (app) {

  app.use('/auth', auth);

  app.use('/', views);

  app.use('/api', api);

  return router;
}