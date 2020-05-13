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
            token,
            data
          });
        } else {
          res.json({
            state: '0',
            msg: '密码不正确'
          });
        }
      }
    });
  }
}