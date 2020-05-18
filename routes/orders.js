var express = require('express');
var router = express.Router();
var ordersCtrl = require('../controllers/orderCtrls')


router.post('/addOrder',ordersCtrl.addOrder);
router.post('/getOrder',ordersCtrl.getOrder);


module.exports = router;
