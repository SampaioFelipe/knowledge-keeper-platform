var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function (req, res) {
    res.render('login');
})

router.get('/logout', function (req, res) {
    res.render('login');
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), function (req, res) {
    res.send('');
});


module.exports = router;
