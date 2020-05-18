var express = require('express');
var router = express.Router();
var orderCtrl = require('../controllers/orderCtrl')


router.post('/addOrder',orderCtrl.addOrder);
router.post('/getOrder',orderCtrl.getOrder);
router.post('/addOrderDetail',orderCtrl.addOrderDetail);


module.exports = router;
