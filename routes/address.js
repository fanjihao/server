var express = require('express');
var router = express.Router();
const addressCtrl = require('../controllers/addressCtrl')

/* GET users listing. */
router.get('/getDatas', addressCtrl.getDatas)
router.post('/addDatas', addressCtrl.addDatas)
router.post('/editDatas', addressCtrl.editDatas)
router.post('/delDatas', addressCtrl.delDatas)

module.exports = router;
