var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wind.html', function (req, res) {
  res.render('wind');
});

router.get('/fire.html', function (req, res) {
  res.render('fire');
});

router.get('/water.html', function (req, res) {
  res.render('water');
});

router.get('/soil.html', function (req, res) {
  res.render('soil');
});

router.get('/light.html', function (req, res) {
  res.render('light');
});

router.get('/dark.html', function (req, res) {
  res.render('dark');
});

router.get('/superman.html', function (req, res) {
  res.render('superman');
});

module.exports = router;
