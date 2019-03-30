var express = require('express');
var router = express.Router();



/* GET Bitwarden listing. */
router.get('/bitwarden', function (req, res, next) {
  res.render('bitwarden', { title: 'Bitwarden nutzen' });
});

/* GET Trello listing. */
router.get('/trello', function (req, res, next) {
  res.render('trello', { title: 'Trello nutzen' });
});

/* GET Recherchieren listing. */
router.get('/recherchieren', function (req, res, next) {
  res.render('recherchieren', { title: 'Tipps zum Recherchieren' });
});

/* GET GoogleTrends listing. */
router.get('/googletrends', function (req, res, next) {
  res.render('googletrends', { title: 'Was ist GoogleTrends und wie verwende ich den Dienst?' });
});

module.exports = router;
