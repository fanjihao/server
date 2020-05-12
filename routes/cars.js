var express = require('express');
var router = express.Router();
var carsCtrl = require('../Ctrlers/carsCtrl')

/* GET users listing. */
router.get('/', carsCtrl.getCount);

module.exports = router;
