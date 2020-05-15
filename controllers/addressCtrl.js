const query = require('../model');

module.exports = {
  getDatas(req, res) {
    console.log('收到获取请求：', req.query)
    const { userid } = req.query

    let sql = `SELECT * FROM users where userId=?`;
    query(sql, [ userid ])
    .then(data => {
      console.log('获取id成功')
      let newsql = `SELECT * FROM address a
                JOIN users u ON a.userId=u.userId
                WHERE userName=? and status=1`
      let username = data[0].userName
      query(newsql, [ username ])
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
    })
    .catch(err => {
        res.json({
            state:'0',
            msg:'获取id失败',
            err
        })
    });
  },
  addDatas(req,res){
    console.log('收到添加请求：', req.body)
    const { consignee,tel,province,city,area,street,userid} = req.body

    const sql = `INSERT INTO address(Province,City,Area,Street,userId,Consignee,Tel) VALUES(?,?,?,?,?,?,?)`;
    query(sql, [ province,city,area,street,userid,consignee,tel ])
    .then(data => {
        res.json({
            state: '200',
            msg: '添加成功',
            data
        });
    })
    .catch(err => {
        res.json({
            state:'0',
            msg:'添加失败',
            err
        })
    });
  },
  editDatas(req,res){
    console.log('收到编辑请求：', req.body)
    const { province,city,area,street,consignee,telphone,addressid} = req.body
    let sql = `UPDATE address SET Province=?,City=?,Area=?,Street=?,Consignee=?
                ,Tel=? where AddressId=?`
    query(sql,[province,city,area,street,consignee,telphone,addressid])
    .then(data => {
      res.json({
        state:'200',
        msg:'编辑成功',
        data
      })
    })
    .catch(err => {
      res.json({
        state:'0',
        msg:'编辑失败',
        err
      })
    })
  },
  delDatas(req,res){
    console.log('收到删除请求：', req.body)
    const { addressid} = req.body
    let sql = `UPDATE address SET status=0 where AddressId=?`
    query(sql,[addressid])
    .then(data => {
      res.json({
        state:'200',
        msg:'删除成功',
        data
      })
    })
    .catch(err => {
      res.json({
        state:'0',
        msg:'删除失败',
        err
      })
    })
  }

}