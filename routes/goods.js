var express = require('express');
var router = express.Router();
var goodsCtrl = require('../controllers/goodsCtrl')

/* GET home page. */
router.get('/', goodsCtrl.get);
router.post('/add',goodsCtrl.add);

module.exports = router;
