var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        // request stays within node/express and is routed as a new request
        successRedirect: '/user',   // goes to routes/user.js
        failureRedirect: '/'        // goes to get '/' route below
    })
);

// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log("request for index");
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});


module.exports = router;
