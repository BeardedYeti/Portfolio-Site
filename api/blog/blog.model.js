var blog = mongoose.model('blog', {
  text : String
});
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  body: String,
  author: String,
  comments: String,
  likes: Number,
  image: String,
  createdOn: Number
});

module.exports = mongoose.model('Thing', ThingSchema);
