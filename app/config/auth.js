let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20');
let User = require('../models/User');

passport.serializeUser(function (user, done) {
    done(null, user.id);

});

passport.deserializeUser(function (id, done) {
    User.findById(id).then(function (user) {
        done(null, user)
    })
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: '/auth/google/redirect',
            clientID: process.env.AUTH_CLIENT_ID,
            clientSecret: process.env.AUTH_CLIENT_SECRET,
        }, function (accessToken, refreshToken, profile, done) {

            User.findOne({ googleID: profile.id }).then(function (currentUser) {
                if (currentUser) {
                    done(null, currentUser);
                }
                else {
                    new User({
                        first_name: profile.name.givenName,
                        last_name: profile.name.familyName,
                        profile_image: profile._json.image.url.split('?')[0],
                        googleID: profile.id
                    }).save().then(function (newUser) {
                        done(null, newUser);
                    });
                }
            });
        })
);