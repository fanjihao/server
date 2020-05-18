const query = require('../model');
var jsonwebtoken = require('jsonwebtoken');
var util = require('../utils/util');

module.exports = {
  getCount(req, res) {
    console.log('收到获取购物车数据请求：', req.body)
    var { userid } = req.body;

    const sql = `SELECT * FROM car c
                JOIN sku s ON c.SkuId=s.SkuId
                JOIN goods g ON s.GoodsId=g.GoodsId
                WHERE c.userId=?`;
    query(sql, [ userid ])
    .then(data => {
      res.json({
        state:'200',
        msg:'获取成功',
        data
      })
    })
    .catch(err => {
      res.json({
        state:'0',
        msg:'获取失败',
        err
      })
    });
  },
  delData(req, res){
    console.log('收到删除购物车数据请求', req.body)
    const { carid } = req.body;
    const sql = `DELETE FROM car WHERE CarId=?`;
    query(sql, [ carid ])
    .then(data => {
      res.json({
        state:'200',
        msg:'删除成功',
        data
      })
      .catch(err => {
        res.json({
          state:'0',
          msg:'删除失败',
          err
        })
      })
    })
  }
}