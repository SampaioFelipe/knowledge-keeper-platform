var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', function (req, res) {
    res.render('login');
})

router.get('/logout', function (req, res) {
    req.logout();

    res.redirect('/auth/login');
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), function (req, res) {
    res.redirect("/");
});

module.exports = router;
