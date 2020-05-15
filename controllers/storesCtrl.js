var query = require('../model');

module.exports = {
    getData(req,res){
        console.log('收到店铺的请求：',req.query);

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
    }
}