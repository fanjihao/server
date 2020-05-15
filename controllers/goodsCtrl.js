var query = require('../model');

module.exports = {
    get(req,res){
        console.log('收到前端商品管理的请求：',req.query);

        const sql = `SELECT * FROM sku a
        INNER JOIN goods b ON a.GoodsId=b.GoodsId
        where a.status = 1`;

        query(sql,null)
        .then(data => {
            res.json({
                state: '200',
                msg: 'goods查找成功',
                data
            })
        })
        .catch(err => {
            res.json({
                state: '0',
                msg: 'goods查找失败',
                err
            });
        })
    },
    add(req,res){
        console.log('收到前端商品添加的请求：',req.body);
        const {goodsId,goodsPic,goodsPrice,goodsSum} = req.body
        const sql = `INSERT INTO sku (GoodsId,Price,Sum,GoodsPic) VALUES(?,?,?,?)`;

        query(sql,[goodsId,goodsPrice,goodsSum,goodsPic])
        .then(data => {
            res.json({
                state: '200',
                msg: '数据添加成功',
                data
            });
        })
        .catch(err => {
            res.json({
                state:'0',
                msg: '数据增加失败',
                err
            })
        })
    },
    del(req,res){
        const { SkuId} = req.body
        const sql = `update sku set status=0 where SkuId=?`;

        query(sql, SkuId)
        .then(data => {
            res.json({
                state: '200',
                msg: '数据查找成功',
                data
            });
        })
        .catch(err => {
            res.json({
                state: '0',
                msg: '数据查找失败',
                err
            });
        })
    }
}