var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('wunschbeitrag', { title: 'Wunschbeitrag hinzufügen' });
});

/* GET Trello listing. */
router.get('/trello', function (req, res, next) {
  res.render('trello', { title: 'Trello nutzen' });
});

module.exports = router;
