//Filename: data.model.js
//Author  : Naila Amani
//Desc.   : represent the data collection schema

const mongoose = require("mongoose");

const Data = mongoose.model(
  "Data",
  new mongoose.Schema({
    title: String,
    article: String,
    page: Number,
    comment: String
  })
);

module.exports = Data;