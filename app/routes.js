var Blog = require('./models/blog');

    module.exports = function(app) {

        // *Server Routes*
        // Place API calls here
        // Place Authentication routes here

        // *API Routes*
        // Uses Mongoose to GET all Blog Posts from database
        app.get('/api/blog', function(req, res) {
            Blog.find(function(err, blog) {
                // If error
                if (err)
                res.send(err);
                res.json(blog); // Returns in JSON
            });
        });

        // Uses Mongoose to POST new Blog Posts in database
        app.post('/api/blog', function(req, res) {
          Blog.create({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author,
            comments: req.body.comments,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            image: req.body.image,
            createdOn: req.body.createdOn
          }, function(err, blog) {
            if (err)
            res.send(err);
            Blog.find(function(err, blog) {
              if (err)
              res.send(err)
              res.json(blog);
            });
          });
        });

        // Uses Mongoose to PUT updates for Blog Posts in database
        app.put('/api/blog/:blog:_id', function(req, res) {
          Blog.findById(req.params.blog_id, function(err, blog) {
            if (err)
            res.send(err);
            blog.title = req.body.title;
            blog.body = req.body.body;
            blog.author = req.body.author;
            blog.comments = req.body.comments;
            blog.likes = req.body.likes;
            blog.dislikes = req.body.dislikes,
            blog.image = req.body.image;
            blog.createdOn = req.body.createdOn;
            blog.save(function(err) {
              if (err)
              res.send(err);
              res.json({ message: 'Blog Updated' });
            });
          });
        });

        // Uses Mongoose to DELETE Blog Posts in database
        app.delete('/api/blog:blog_id', function(req, res) {
          Blog.remove({
            _id : req.params.blog_id
          }, function(err, blog) {
            if (err)
            res.send(err);
            Blog.find(function(err, blog) {
              if (err)
              res.send(err)
              res.json(blog);
            });
          });
        });


        // API's for PUT, POST, DELETE go here

        // *Frontend Routes*
        // Route to handle all AngularJS requests
        var path = require('path');

        app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../client/views/index.html"));
        });

    };
