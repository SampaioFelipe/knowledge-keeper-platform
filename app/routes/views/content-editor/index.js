var express = require('express');
var router = express.Router();

var minify = require('html-minifier').minify;


router.get('/', function (req, res) {

    res.render('content-editor/index', { title: 'Content Editor' });
});

router.post('/save-my-page', function (req, res, next) {
    var regions = JSON.parse(req.body.regions);

    var document = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: minify(regions["0"], {
            collapseWhitespace: true,
            conservativeCollapse: true,
            removeEmptyElements: true,
            removeScriptTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true
        })
    }

    // elastic.addDocument(document).then(function (result) { res.json(result) });

    res.end();

});

module.exports = router;

