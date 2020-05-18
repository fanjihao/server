var express = require('express');
var router = express.Router();
var giftCtrl = require('../controllers/giftCtrl')

/* GET home page. */
router.get('/getData',giftCtrl.getData)

module.exports = router;
