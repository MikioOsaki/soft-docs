var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {   //hier blos nix reinschreiben nach dem /'
  res.render('mausklick',  { title: 'Mausklick' });
});

module.exports = router;
