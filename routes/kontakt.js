var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('kontakt',  { title: 'Kontakt anlegen' });
});

module.exports = router;
