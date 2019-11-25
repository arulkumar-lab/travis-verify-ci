var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express Module' });
});

router.get('/userlist', function (req, res) {
  var json = [{ name: "Arul", age: 20 },{ name: "kumar", age: 30 },{ name: "sam", age: 70 }
          ];
  res.render('userlist', { userlist : json });
});


module.exports = router;
