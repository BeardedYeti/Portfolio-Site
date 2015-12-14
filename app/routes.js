var Blog = require('./models/blog');


    module.exports = function(app) {

        // *Server Routes*
        // Place API calls here
        // Place Authentication routes here
        //var express = require('express');
        //var router = express.Router();
        // *API Routes*
        // Uses Mongoose to GET all Blog Posts from database

        app.get('/api/blog', function(req, res, next) {
            Blog.find(function(err, blog) {
                // If error
                if (err) return next(err);
                  //res.send(err);
                  res.json(blog);
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
                res.json({ message: 'Blog Post Created!' });
            });
          });
        });

        // Uses Mongoose to GET Blog Post by _id from database
        app.get('/api/blog/:blog_id', function(req, res) {
          Blog.findById(req.params.blog_id, function(err, blog) {
            if (err)
              res.send (err);
              res.json(blog);
          });
        });

        // Uses Mongoose to PUT updates for Blog Posts by _id in database
        app.put('/api/blog/:blog_id', function(req, res) {
            Blog.findById(req.params.blog_id, function (err, blog) {
              if (err) res.send(err);

              if (req.body.title) blog.title = req.body.title;
              if (req.body.body) blog.body = req.body.body;
              if (req.body.author) blog.author = req.body.author;
              if (req.body.comments) blog.comments = req.body.comments;
              if (req.body.likes) blog.likes = req.body.likes;
              if (req.body.dislikes) blog.dislikes = req.body.dislikes;
              if (req.body.image) blog.image = req.body.image;
              if (req.body.createdOn) blog.createdOn = req.body.createdOn;

              blog.save( function (err) {
                if (err)
                  res.send(err);
                  res.json({message: 'Blog Post Updated!'});
              });
            });
          });

        // Uses Mongoose to DELETE Blog Posts by _id in database
        app.delete('/api/blog/:blog_id', function(req, res) {
            Blog.remove({
              _id: req.params.blog_id
            }, function (err, blog) {
              if (err)
                res.send(err);
                res.json({ message: 'Blog Post Deleted'});
            });
          });

        // *Frontend Routes*
        // Route to handle all AngularJS requests

        app.get('*', function(req, res) {
        res.sendfile('./client/views/index.html');
        });

    };
