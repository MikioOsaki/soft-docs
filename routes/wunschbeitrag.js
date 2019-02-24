var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('wunschbeitrag', { title: 'Wunschbeitrag hinzufügen' });
});

module.exports = router;
