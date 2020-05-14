var express = require('express');
var router = express.Router();
const addressCtrl = require('../controllers/addressCtrl')

/* GET users listing. */
router.get('/getDatas', addressCtrl.getDatas)

module.exports = router;
