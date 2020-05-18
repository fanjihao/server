var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/carsCtrl')

/* GET home page. */
router.post('/getCount',carsCtrl.getCount)
router.post('/delData',carsCtrl.delData)

module.exports = router;
