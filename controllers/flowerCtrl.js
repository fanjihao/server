const query = require('../model');

module.exports = {
  getData(req, res) {
    console.log('收到请求：', req.query)
    // const { class2Id } = req.query

    let sql = `SELECT * FROM class c 
    JOIN goods g ON c.ClassId = g.ClassId 
    JOIN sku s ON s.GoodsId = g.GoodsId`;
    query(sql, null)
    .then(data => {
        console.log(data)
        res.json({
            state:'200',
            msg:'成功',
            data
        })
    })
    .catch(err => {
        res.json({
            state:'0',
            msg:'失败',
            err
        })
    });
  },
//   addDatas(req,res){
//     console.log('收到添加请求：', req.body)
//     const { consignee,tel,province,city,area,street,userid} = req.body

//     const sql = `INSERT INTO address(Province,City,Area,Street,userId,Consignee,Tel) VALUES(?,?,?,?,?,?,?)`;
//     query(sql, [ province,city,area,street,userid,consignee,tel ])
//     .then(data => {
//         res.json({
//             state: '200',
//             msg: '添加成功',
//             data
//         });
//     })
//     .catch(err => {
//         res.json({
//             state:'0',
//             msg:'添加失败',
//             err
//         })
//     });
//   },
//   editDatas(req,res){
//     console.log('收到编辑请求：', req.body)
//     const { province,city,area,street,consignee,telphone,addressid} = req.body
//     let sql = `UPDATE address SET Province=?,City=?,Area=?,Street=?,Consignee=?
//                 ,Tel=? where AddressId=?`
//     query(sql,[province,city,area,street,consignee,telphone,addressid])
//     .then(data => {
//       res.json({
//         state:'200',
//         msg:'编辑成功',
//         data
//       })
//     })
//     .catch(err => {
//       res.json({
//         state:'0',
//         msg:'编辑失败',
//         err
//       })
//     })
//   },
//   delDatas(req,res){
//     console.log('收到删除请求：', req.body)
//     const { addressid} = req.body
//     let sql = `UPDATE address SET status=0 where AddressId=?`
//     query(sql,[addressid])
//     .then(data => {
//       res.json({
//         state:'200',
//         msg:'删除成功',
//         data
//       })
//     })
//     .catch(err => {
//       res.json({
//         state:'0',
//         msg:'删除失败',
//         err
//       })
//     })
//   }

}