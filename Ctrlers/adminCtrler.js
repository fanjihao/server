const query =require('../model');
const jsonwebtoken = require('jsonwebtoken');
const util = require('../utils/util');

module.exorts = {
    login(req,res){
        console.log('收到后台管理登录请求：',req.body)
        let {username,userpass} = req.body;

        const sql = "SELECT*FROM admin WHERE AdminName=?";
        query(sql,[username])
        .then(data =>{
            if(data.length===0){
                res.json({
                    msg:'账号或者密码错误' 
                })
            } else{
                if(data[0].AdminPass === userpass){
                    const token = jsonwebtoken.sign(
                        {
                            userName: username
                        },
                        util.secretOrPrivateKey,
                        {
                            expiresIn:600*60
                        }
                    );

                    res.json({
                        state: '200',
                        msg:'登陆成功',
                        token
                    });
                }else{
                    res.json({
                        state: '0',
                        msg: '账号或密码错误'
                    })
                }
            }
        })
    }
}