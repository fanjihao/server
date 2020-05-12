var express = require('express');
var router = express.Router();
const adminCtrler = require('../Ctrlers/adminCtrler')

/* GET users listing. */
router.post('/', adminCtrler.login)

module.exports = router;
