var express = require('express');
var router = express.Router();
const adminCtrl = require('../controllers/adminCtrl')

/* GET users listing. */
router.post('/login', adminCtrl.login)

module.exports = router;
