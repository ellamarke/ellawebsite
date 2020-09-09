var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ella', currentTime: Date() })
})

router.get('/work', function(req, res, next) {
  res.render('work')
})

router.get('/about', function(req, res, next) {
  res.render('about')
})

router.get('/contact', function(req, res, next) {
  res.render('contact')
})

router.get('/food-of-paradise', function(req, res, next) {
  res.render('food-of-paradise')
})

router.get('/sally-clarke', function(req, res, next) {
  res.render('sally-clarke')
})

router.get('/nuns', function(req, res, next) {
  res.render('nuns')
})

router.get('/anti-racism', function(req, res, next) {
  res.render('anti-racism')
})

router.get('/mixing-bowl', function(req, res, next) {
  res.render('mixing-bowl')
})

router.get('/student-survey', function(req, res, next) {
  res.render('student-survey')
})

router.get('/okra', function(req, res, next) {
  res.render('okra')
})

router.get('/odyssey', function(req, res, next) {
  res.render('odyssey')
})

router.get('/leica', function(req, res, next) {
  res.render('leica')
})

router.get('/1984', function(req, res, next) {
  res.render('1984')
})

router.get('/brains', function(req, res, next) {
  res.render('brains')
})

router.get('/gif-suite', function(req, res, next) {
  res.render('gif-suite')
})

router.get('/bike-theft', function(req, res, next) {
  res.render('bike-theft')
})

router.get('/martins-dream', function(req, res, next) {
  res.render('martins-dream')
})

router.get('/abeo', function(req, res, next) {
  res.render('abeo')
})

router.get('/grid-test', function(req, res, next) {
  res.render('grid-test')
})

module.exports = router
