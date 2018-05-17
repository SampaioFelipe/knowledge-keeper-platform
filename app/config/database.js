var mongoose = require('mongoose');

mongoDB = process.env.MONGO_URI || 'mongodb://localhost:27017'

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise; // O que é isso?

var db = mongoose.connection;

db.on('error', console.error.bind((console, 'MongoDB connection error:')));

module.exports = db;



