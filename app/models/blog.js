// Grab the mongoose module
var mongoose = require('mongoose');

// *Define Blog model*
// module.exports allows us to pass this to other files when it is called
// For more fields refer to Mongoose docs
module.exports = mongoose.model('Blog', {
  title: {type : String, default: ''},
  body: {type : String, default: ''},
  author: {type : String, default: ''},
  comments: [{ body: String, author: String, date: Date }],
  likes: {type : Number, default: '0'},
  dislikes: {type : Number, default: '0'},
  image: {type : String, default: ''},
  createdOn: { type: Date, default: Date.now }
});
