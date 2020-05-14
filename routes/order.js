var express = require('express');
var router = express.Router();
var orderCtrl = require('../controllers/orderCtrl')

/* GET home page. */
router.post('/order',orderCtrl.sub)

module.exports = router;
