// 引入数据库
const mysql = require("mysql");

// 连接数据库
var connection = mysql.createConnection({
  host: "43.152.196.179", //服务器地址，连接本机可以使用localhost或者127.0.0.1
  user: "root", //连接数据库的用户名
  password: "YKS$@2Zy58Nk2fhT", //连接数据库的密码
  database: "test", //数据库的名称
  port: 3306, //数据库端口号，默认3306，可以省略不写
});

// 查询操作，封装函数，查询当前表的所有数据
function selectAll() {
  // 打开数据库连接
  connection.connect();
  // 编写sql语句
  let sql = "select * from sys_user";
  return new Promise((resolve, reject) => {
    // 执行sql，并处理执行的结果，查询的结果在results变量中，results其实是一个数组
    connection.query(sql, function (error, results, fields) {
      // 释放数据库连接
      connection.end();
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

function getTime() {
  return new Date().getTime();
}
export default async function handler(request, response) {
  const start = getTime();

  const data = await selectAll();

  const end = getTime();

  const result = {
    code :0,
    message:"success",
    time:end - start,
    data:data
  }
  response.status(200).send(result);
}


