const query =require('../model');

modules.exports = {
    getCount(req,res){
        const {userid} = req.query
        let sql = `SELECT * FROM car WHERE userId=?`
        query(sql,[userid])
        .then(data=>{
            res.json({
                state:'200',
                msg:'获取信息成功',
                data
            })
        })
        .catch(err =>{
            res.json({
                state:'0',
                msg:'获取信息失败',
                err
            })
        })
    }
}