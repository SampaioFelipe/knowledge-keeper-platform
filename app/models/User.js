var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: { type: String, required: true, max: 50 },
        last_name: { type: String, required: true, max: 100 },
        birth_date: { type: Date, required: true }
    }
);

// Virtual methods
UserSchema.virtual('fullname').get(function () {
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model('User', UserSchema);