var middlewares = require('./middlewares');
var view_engine = require('./view-engine');
var auth = require('./auth');

module.exports = {
    db: require('./database'),

    setup: function (app) {
        middlewares(app);
        view_engine(app);
    }
}

