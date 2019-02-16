var express = require('express');
var router = express.Router();

/* GET Browser listing. */
router.get('/browser', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('browser',  { title: 'Browser' });
});

/* GET Kontakt listing. */
router.get('/kontakt', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('kontakt',  { title: 'Kontakt anlegen' });
});

/* GET Mausklick listing. */
router.get('/mausklick', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('mausklick',  { title: 'Mausklick' });
});

/* GET Shortcuts listing. */
router.get('/shortcuts', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('shortcuts',  { title: 'Shortcuts' });
});

/* GET WhatsApp listing. */
router.get('/whatsapp', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('whatsapp',  { title: 'WhatsApp' });
});

module.exports = router;
