// Grab the mongoose module
var mongoose = require('mongoose');

// *Define Blog model*
// module.exports allows us to pass this to other files when it is called
// For more fields refer to Mongoose docs
module.exports = mongoose.model('Blog', {
    title: String,
    body: String,
    author: String,
    comments: [{ body: String, date: Date }],
    likes: Number,
    dislikes: Number,
    image: {type : String, default: ''},
    createdOn: date: { type: Date, default: Date.now }
});
