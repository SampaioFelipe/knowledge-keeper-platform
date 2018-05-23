var middlewares = require('./middlewares');
var view_engine = require('./view-engine');
var auth = require('./auth');

exports.db = require('./database');

exports.setup = function (app) {
    middlewares(app);
    view_engine(app);
}