var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan'); // HTTP request logger
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); // for parsing JSON and url-encoded data
var multer = require('multer'); // for parsing multipart/form data
var sassMiddleware = require('node-sass-middleware'); // for compile sass in real-time

module.exports = function (app) {

    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    app.use(logger('dev'));
    app.use(cookieParser());
    
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/xwww-
    app.use(multer().array()); // for parsing multipart/form-data

    // Sass setup
    app.use(sassMiddleware({
        root: path.join(__appdir, 'public/'),
        src: 'stylesheets/sass',
        dest: '/stylesheets',
        debug: true,
        outputStyle: 'compressed',
        indentedSyntax: true, // true = .sass and false = .scss
        sourceMap: true,
        prefix: '/stylesheets/',
        includePaths: [path.join(__basedir, 'node_modules')]
    }));
}