const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TopicSchema = new Schema(
    {
        title: { type: String, require: true },
        description: String,
        body: String,
        rate: Number,
        keywords: [{type: String}],

        authors: [{ type: Schema.ObjectId, ref: 'User', require: true }]

    }
);

module.exports = mongoose.model('Topic', TopicSchema);
