var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var KnowledgeSchema = new Schema(
    {
        title: { type: String, require: true },
        description: String,
        owner: [
            { type: Schema.ObjectId, ref: 'User', require: true }
        ],
        collaborators: [
            { type: Schema.ObjectId, ref: 'User' }
        ],

        modules: [
            {
                title: { type: String, require: true },
                description: { type: String },
                content: [{ type: Schema.ObjectId, ref: 'Content' }]
            }
        ]

    }
);

var ContentSchema = new Schema(
    {
        title: { type: String, require: true },
        description: String,
        body: String,
        rate: Number,
        keywords: [{type: String}],

        authors: [{ type: Schema.ObjectId, ref: 'User', require: true }]

    }
);

module.exports = {
    Content: mongoose.model('Content', ContentSchema),
    Knowledge: mongoose.model('Knowledge', ContentSchema)
};