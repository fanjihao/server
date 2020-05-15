const query =require('../model');

module.exports = {
    login(req,res){
        console.log('收到后台管理登录请求：',req.body)
        var {adminname,adminpass} = req.body;

        const sql = `SELECT  * FROM admin WHERE AdminName=?`;
        query(sql,[adminname])
        .then(data =>{
            if(data.length===0){
                res.json({
                    state: '0',
                    msg:'账号或者密码错误' 
                })
            } else{
                if(data[0].AdminPass === adminpass){
                    res.json({
                        state: '200',
                        msg:'登陆成功',
                    });
                }else{
                    res.json({
                        state: '0',
                        msg: '账号或密码错误'
                    })
                }
            }
        })
        .catch(err => {
            res.json({
                state:'0',
                msg:'请求失败',
                err
            })
        })
    }
}