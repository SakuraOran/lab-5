var express = require('express');
var router = express.Router();

var User = require('../models/account');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}
/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {
  User.find(function(err, users) {
     if (err) {
         console.log(err);
         res.render('error');
     }
      else {
         // load the drinks page and pass the query result
         res.render('users', {
             title: 'View Users',
             users: users,
             user: req.user
         });
     }
  });
});

module.exports = router;
