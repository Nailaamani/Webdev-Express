//Filename: index.js
//Author  : Naila Amani
//Desc.   : as Index for models used

const dbConfig = require("../config/db.config");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.data = require("./data.model");

module.exports = db;