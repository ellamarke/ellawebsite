var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ella', currentTime: Date() })
})

router.get('/mywork', function(req, res, next) {
  res.render('mywork')
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

module.exports = router
