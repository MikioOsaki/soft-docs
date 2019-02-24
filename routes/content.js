var express = require('express');
var router = express.Router();

/* GET Browser listing. */
router.get('/browser', function (req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('browser', { title: 'Browser' });
});

/* GET Kontakt listing. */
router.get('/kontakt', function (req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('kontakt', { title: 'Kontakt anlegen' });
});

/* GET Mausklick listing. */
router.get('/mausklick', function (req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('mausklick', { title: 'Mausklick' });
});

/* GET Shortcuts listing. */
router.get('/shortcuts', function (req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('shortcuts', { title: 'Shortcuts' });
});

/* GET WhatsApp listing. */
router.get('/whatsapp', function (req, res, next) {
  res.render('whatsapp', { title: 'WhatsApp' });
});

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
