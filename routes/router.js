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

router.get('/grid-test', function(req, res, next) {
  res.render('grid-test')
})

module.exports = router
