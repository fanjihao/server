var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/carsCtrl')

/* GET home page. */
router.post('/getCount',carsCtrl.getCount)

module.exports = router;
