const query = require('../model');
var jsonwebtoken = require('jsonwebtoken');
var util = require('../utils/util');

module.exports = {
  login(req, res) {
    console.log('收到前端的登录请求：', req.body)
    var { username, userpass } = req.body;

    const sql = `SELECT * FROM users WHERE userName=? AND is_del=1`;
    query(sql, [ username ])
    .then(data => {
      if(data.length === 0) {
        res.json({
          state: '0',
          msg: '账户名不正确'
        });
      } else {
        if(data[0].userPass === userpass) {
          // 生成 token
          const token = jsonwebtoken.sign(
            {
              userName: username
            }, 
            util.secretOrPrivateKey , // 秘钥，用于验证
            { 
              expiresIn: 60 * 60 // 过期时间，60 分钟
            }
          );

          res.json({
            state: '200',
            msg: '登录成功',
            token
          });
        } else {
          res.json({
            state: '0',
            msg: '密码不正确'
          });
        }
      }
    });
  },
  regsiter(req,res){
    console.log('收到前端注册请求：',req.body);
    const {username,userpass} = req.body;
    const sql = `select userName from users where userName=?`;

    query(sql,[username])
    .then(data => {
      if(data.length === 0){
        const newSql = `insert into users(userName,userPass)values(?,?)`;
        query(newSql,[username,userpass])
        .then(data => {
          res.json({
            state:'200',
            msg:"注册成功"
          })
        })
        .catch(err => {
          res.json({
            state:'0',
            msg:'数据库操作失败',
            err
          })
        })
      }else{
        res.json({
          state:'0',
          msg:'用户名已存在'
        })
      }
    })
    .catch(err => {
      res.json({
        state:"0",
        msg:'注册失败',
        err
      })
    })
  }
}