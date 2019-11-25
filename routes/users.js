var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send( '<p>Response content page </p><p><a href="/">Back to HomePage</a></p>');
});

module.exports = router;
