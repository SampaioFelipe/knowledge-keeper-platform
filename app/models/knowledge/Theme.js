const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ThemeSchema = new Schema(
    {
        title: { type: String, required: true },
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
