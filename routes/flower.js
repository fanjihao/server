var express = require('express');
var router = express.Router();
var flowerCtrl = require('../controllers/flowerCtrl')

router.get('/getData',flowerCtrl.getData);
router.post('/addToCar',flowerCtrl.addToCar);
router.post('/detail',flowerCtrl.detail)
router.post('/getSearch',flowerCtrl.getSearch)

module.exports = router;