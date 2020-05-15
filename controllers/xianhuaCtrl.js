const query = require('../model');

module.exports = {
  getData(req, res) {
    console.log('收到获取请求：', req.query)


    let sql = `SELECT * FROM goods a
    INNER JOIN class2 b ON a.Class2Id=b.Class2Id
    INNER JOIN sku c ON a.GoodsId=c.GoodsId
    WHERE a.Class2Id= 1`;
    query(sql, null)
    .then(data => {
      console.log('获取数据成功')
        res.json({
        state: '200',
        msg: '查询成功',
        data
      })
    })
    .catch(err => {
      res.json({
          state:'0',
          msg:'查询失败',
          err
      })
    });
    }
}