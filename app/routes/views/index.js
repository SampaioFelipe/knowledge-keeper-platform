const express = require('express');
const router = express.Router();

const isAuthenticated = appRequire('lib/middlewares').isAuthenticated;

/* GET home page. */
router.get('/', isAuthenticated, function (req, res, next) {
    res.render('index', { title: 'Knowledge Keeper', user: req.user });
});

/* Content */

router.get('/new/theme', function (req, res) {
    res.send('New theme form');
});


module.exports = router;
