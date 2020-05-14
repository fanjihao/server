const query = require('../model');

module.exports = {
  getDatas(req, res) {
    console.log('收到获取请求：', req.query)
    const { username } = req.query

    const sql = `SELECT * FROM address a
                JOIN users u ON a.userId=u.userId
                WHERE userName=?`;
    query(sql, [ username ])
    .then(data => {
        res.json({
            state: '200',
            msg: '查询成功',
            data
        });
    })
    .catch(err => {
        res.json({
            state:'0',
            msg:'查询失败',
            err
        })
    });
  }
}