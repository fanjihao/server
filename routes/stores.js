var express = require('express');
var router = express.Router();
var storesCtrl = require('../controllers/storesCtrl')

/* GET home page. */
router.get('/',storesCtrl.getData)

module.exports = router;
