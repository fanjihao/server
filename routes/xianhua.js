var express = require('express');
var router = express.Router();
var xianhuaCtrl = require('../controllers/xianhuaCtrl')

/* GET home page. */
router.get('/getData',xianhuaCtrl.getData)

module.exports = router;
