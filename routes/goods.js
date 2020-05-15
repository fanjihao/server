var express = require('express');
var router = express.Router();
var goodsCtrl = require('../controllers/goodsCtrl')

/* GET home page. */
router.get('/', goodsCtrl.get);
router.post('/addgoods',goodsCtrl.add);
router.post('/del',goodsCtrl.del);

module.exports = router;
