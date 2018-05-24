var express = require('express');
var router = express.Router();

var themes = require('./themes');
var topics = require('./topics');

router.use('/themes', themes);
router.use('/topics', topics);

router.get('/new/theme', function (req, res) {
    res.send('New theme form');
});

module.exports = router;