var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')

/* GET users listing. */
router.post('/login',userCtrl.login);
router.post('/register',userCtrl.regsiter);

module.exports = router;
