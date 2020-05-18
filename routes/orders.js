var express = require('express');
var router = express.Router();
var ordersCtrl = require('../controllers/ordersCtrl')

/* GET home page. */
router.get('/',ordersCtrl.getData);
router.post('/edit',ordersCtrl.edit);
router.post('/',ordersCtrl.getData);
router.post('/shaixuan',ordersCtrl.shaixuan);


module.exports = router;
