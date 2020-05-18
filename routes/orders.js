var express = require('express');
var router = express.Router();
var ordersCtrl = require('../controllers/orderCtrls')

/* GET home page. */
router.get('/',ordersCtrl.getData)

module.exports = router;
