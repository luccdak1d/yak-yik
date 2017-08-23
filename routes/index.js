var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/createzone', function(req, res, next) {
  res.render('createzone');
});

router.get('/createcomment', function(req, res, next) {
  res.render('createcomment');
});

module.exports = router;
