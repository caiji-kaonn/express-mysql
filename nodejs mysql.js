// 引入mysql
const mysql=require('mysql');
const conn=mysql.createConnection({
host:'localhost',
port:'3306',
user:'root',
password:'root',
database:'ajax35'
})

// 准备语句
const sql=`SELECT * FROM heros`;

// 执行语句
conn.query(sql,(err,result,filed)=>{
if(err) console.log(err);
console.log(result);
console.log(filed);
})


