var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')

/* GET users listing. */
router.post('/login',userCtrl.login);

module.exports = router;
