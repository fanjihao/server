var express = require('express');
var router = express.Router();
var flowerCtrl = require('../controllers/flowerCtrl')

router.get('/getData',flowerCtrl.getData)

module.exports = router;