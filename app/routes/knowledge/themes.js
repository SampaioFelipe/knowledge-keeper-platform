var express = require('express');
var router = express.Router();

var Theme = appRequire('models/knowledge/Theme');

router.get('/:id?', function (req, res) {
    res.json({test: 'get'});
});

router.post('/', function (req, res) {
    console.log(req.body);

    res.json({test: 'post'});
});

router.put('/:id', function (req, res) {
    res.json({test: 'put'});
});

router.delete('/:id', function (req, res) {
    res.json({test: 'delete'});
});

module.exports = router;