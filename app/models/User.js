var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: { type: String, required: true, max: 50 },
        last_name: { type: String, required: true, max: 100 },
        email: { type: String, required: true, max:100 },
        profile_image: { type: String },
        birth_date: { type: Date, required: false },
        googleID: { type: String }
    }
);

// Virtual methods
UserSchema.virtual('fullname').get(function () {
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);