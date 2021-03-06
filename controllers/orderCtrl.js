const query = require('../model');

module.exports = {
    addOrder(req, res) {
        console.log('收到添加订单的请求：', req.body)
        var { orderno, addressid, userid, orderphone,orderstatus, service, msginfo, ordertime } = req.body;

        let sql = `INSERT INTO orders(OrderNo,AddressId,userId,OrderPhone,OrderStatus,Service,msgInfo,OrderTime) values(?,?,?,?,?,?,?,?)`;
        query(sql, [ orderno, addressid, userid, orderphone, orderstatus, service, msginfo, ordertime ])
        .then(data => {
            res.json({
                state: '200',
                msg: '添加成功',
                data
            });
            console.log(data.insertId)
        })
        .catch(err => {
            res.json({
                state:'0',
                msg:'添加失败',
                err
            })
        })
    },
    getOrder(req,res) {
        console.log('收到获取用户全部订单的请求',req.body);

        const { userid } = req.body;
        const sql = `SELECT * FROM orders o
        JOIN address a ON o.AddressId=a.AddressId
        JOIN odetail d ON o.OrderId=d.OrderId
        JOIN goods g ON d.GoodsId=g.GoodsId
        WHERE o.userId=?`
        query(sql, [userid])
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
        })
    },
    getlist(req,res) {
        console.log('收到获取用户全部订单的请求',req.body);

        const { userid } = req.body;
        const sql = `SELECT * FROM orders o
        JOIN address a ON o.AddressId=a.AddressId
        WHERE o.userId=?`
        query(sql, [userid])
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
        })
    },
    addOrderDetail(req,res){
        let sql = `INSERT INTO odetail(Total,GoodsId,GoodsNum,OrderId) VALUES(?,?,?,?) `
        let is=true ;
        const { orderDetail,orderid} = req.body;
        for(let i=0;i<orderDetail.length;i++){
            const a = orderDetail[i]
            query(sql,[a.CarSum*a.Price,a.GoodsId,a.CarSum,orderid])
            .catch(err =>{
                is=!true
            })
        }
        if(is){
            res.json({
                state:200,
                mag:'成功·', 
            })
        }
        else{
            res.json({
                state:0,
                mag:'失败',
            }) 
        }
    }
}
