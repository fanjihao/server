const query = require('../model');

module.exports = {
  getData(req, res) {
    console.log('收到请求：', req.query)

    let sql = `SELECT * FROM class c 
    JOIN goods g ON c.ClassId = g.ClassId 
    JOIN sku s ON s.GoodsId = g.GoodsId`;
    query(sql, null)
    .then(data => {
        console.log(data)
        res.json({
            state:'200',
            msg:'成功',
            data
        })
    })
    .catch(err => {
        res.json({
            state:'0',
            msg:'失败',
            err
        })
    });
  },
  addToCar(req, res){
    console.log('收到添加购物车请求', req.body);
    const { userid, carsum, skuid } = req.body;
    const sql = `INSERT INTO car(userId, CarSum, SkuId) values(?,?,?)`;
    query(sql, [ userid, carsum, skuid ])
    .then(data => {
      res.json({
        state:'200',
        msg:'添加成功',
        data
      })
      .catch(err => {
        res.json({
          state:"0",
          msg:'添加失败',
          err
        })
      })
    })
  },
  detail(req, res){
    console.log('鲜花详情', req.body);
    const { flowerid } = req.body;
    const sql = `SELECT * FROM goods g
                JOIN class c ON g.ClassId=c.ClassId
                JOIN sku s ON g.GoodsId=s.GoodsId
                WHERE g.GoodsId=?`;
    query(sql, [ flowerid ])
    .then(data => {
      res.json({
        state:'200',
        msg:'添加成功',
        data
      })
    })
    .catch(err => {
      res.json({
        state:"0",
        msg:'添加失败',
        err
      })
    })
  },
  getSearch(req,res){
    let {sear} = req.body
    sear = '%' + sear + '%'
    console.log(sear)
    console.log('收到前端的搜索请求',req.body)
    const sql = `SELECT * FROM goods AS g
    JOIN sku AS s ON s.GoodsId=g.GoodsId
    WHERE g.GoodsName LIKE ?`

    query(sql,[sear])
    .then(data => {
      res.json({
        state:'200',
        msg:'搜索成功',
        data
      })
    })
    .catch(err => {
      res.json({
        state:"0",
        msg:'搜索失败',
        err
      })
    })
  }
}