var express = require('express');
var router = express.Router();

var minify = require('html-minifier').minify;

var elastic = require('../models/elasticsearch'); //elastic

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Knowledge Keeper' });
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
