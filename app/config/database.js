var mongoose = require('mongoose');
var debug = require('debug')('app');

mongoDB = process.env.MONGO_URI || 'mongodb://localhost:27017/knowledge-keeper'

mongoose.connect(mongoDB, function (){
    debug('Connected to mongoDB');
});

mongoose.Promise = global.Promise; // O que é isso?

var db = mongoose.connection;

db.on('error', console.error.bind((console, 'MongoDB connection error:')));

module.exports = db;



