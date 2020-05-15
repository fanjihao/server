// 连接数据库
const mysql = require('mysql');

// 配置连接信息
const pool = mysql.createPool({
  host: '172.17.7.239',
  user:'root',
  password: 'root',
  database: 'xian.com',
  port: '3306'
});

const query = (sql, options) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if(err) {
        console.log('连接错误：', err);
        return reject(err);
      }

      connection.query(sql, options, (err2, result) => {
        if(err2) {
          console.log('查询错误', err2);
          reject(err2);
        } else {
          resolve(result);
        }
        
        connection.release(); // 释放连接池
      });
    });
  });
};

module.exports = query;

