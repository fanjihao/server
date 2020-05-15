var express = require('express');
var router = express.Router();
var orderCtrl = require('../controllers/orderCtrl')

/* GET users listing. */
router.post('/addOrder',orderCtrl.addOrder);
router.post('/getOrder',orderCtrl.getOrder);

module.exports = router;
