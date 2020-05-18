var query = require('../model');

module.exports = {
    getData(req,res){
        console.log('收到前端订单管理的请求：',req.query);

        const sql = `SELECT * FROM orders`;

        query(sql,null)
        .then(data => {
            res.json({
                state: '200',
                msg: 'orders查找成功',
                data
            })
        })
        .catch(err => {
            res.json({
                state: '0',
                msg: 'orders查找失败',
                err
            });
        })
    },
    edit(req,res){
        console.log('收到前端订单发货的请求：',req.body);
        let {OrderId} = req.body
        const sql = `UPDATE orders  SET OrderStatus=1 WHERE OrderId=?`;

        query(sql,OrderId)
        .then(data => {
            res.json({
                state: '200',
                msg: 'orders查找成功',
                data
            })
        })
        .catch(err => {
            res.json({
                state: '0',
                msg: 'orders查找失败',
                err
            });
        })
    },
    shaixuan(req,res){
        console.log('收到前端订单筛选的请求：',req.body);
        let {OrderNo,orderstate} = req.body
        OrderNo = '%'+OrderNo+'%';
        orderstate = '%'+orderstate+'%';
        console.log(OrderNo,orderstate);
        const sql = `SELECT * FROM orders WHERE OrderNo LIKE ? AND OrderStatus LIKE ?`;

        query(sql,[OrderNo,orderstate])
        .then(data => {
            res.json({
                state: '200',
                msg: 'orders查找成功',
                data
            })
        })
        .catch(err => {
            res.json({
                state: '0',
                msg: 'orders查找失败',
                err
            });
        })
    },

}