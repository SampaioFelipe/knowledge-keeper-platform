var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy(
        {
            callbackURL: '/auth/google/redirect',
            clientID: process.env.AUTH_CLIENT_ID,
            clientSecret: process.env.AUTH_CLIENT_SECRET,
        }, function (accessToken, refreshToken, profile, done) {
            console.log(profile);
        })
)