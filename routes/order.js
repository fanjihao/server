var express = require('express');
var router = express.Router();
var orderCtrl = require('../controllers/orderCtrl')

<<<<<<< HEAD
/* GET users listing. */
router.post('/addOrder',orderCtrl.addOrder);
router.post('/getOrder',orderCtrl.getOrder);
=======
/* GET home page. */
router.post('/order',orderCtrl.sub)
>>>>>>> wang

module.exports = router;
