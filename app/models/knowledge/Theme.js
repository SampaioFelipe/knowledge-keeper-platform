let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ThemeSchema = new Schema(
    {
        title: { type: String, require: true },
        description: String,

        owners: [
            { type: Schema.ObjectId, ref: 'User', require: true }
        ],

        collaborators: [
            { type: Schema.ObjectId, ref: 'User' }
        ],

        topics: [
            {
                path: [{ type: String, require: true }],
                topic: { type: Schema.ObjectId, ref: 'Topic' }
            }
        ]

    }
);

module.exports = mongoose.model('Theme', ThemeSchema);