var path = require('path');

var expressNunjucks = require('express-nunjucks'); // view-engine

module.exports = function(app) {
    app.set('views', path.join(__appdir, 'views')); // views folder specification

    var njk = expressNunjucks(app, {
    watch: true,
    noCache: true,
    autoescape: true,
    });
}

