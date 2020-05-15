var express = require('express');
var router = express.Router();
var yongCtrl = require('../controllers/yongCtrl')

/* GET home page. */
router.get('/getData',yongCtrl.getData)

module.exports = router;
