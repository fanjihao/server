var query = require('../model');

module.exports = {
    get(req,res){
        console.log('收到前端商品管理的请求：',req.query);

        const sql = `SELECT * FROM sku`;

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
        const {goodsName,goodsClassify} = req.body
        const sql = `INSERT INTO goods (goodsName,Class2Id) VALUES(?,?)`;

        query(sql,[goodsName,goodsClassify])
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
    }
}