const fs=require('fs');
const mysql=require('mysql');

const conn=mysql.createConnection({
    host:'localhost',
    port:3306,
   user:'root',
   password:'root',
   database:'ajax35'
})


 // 1.读取Json文件，转成数组
function readJson(callback){
        // fs.readFile('./data/heros.json','utf-8',(err,data)=>{
        //     if(err) console.log(err);
        // let arr=JSON.parse(data);
        // callback(arr);
        // })
        // 找出所有没被删除的数据
        let sql=`SELECT * FROM heros WHERE isDelete=0`;
        conn.query(sql,(err,result)=>{
            if(err) console.log(err);
            callback(result)
        })
}

// 2.在数据中找出对应的那个id--这是以前的做法
// 现在只需要在数据库查找对应的id即可
function getHerobyId(id,callback){
    // this.readJson((arr)=>{
    //     let target=arr.find(e=>{
    //         return e.id==id;
    //     })
    //     callback(target)
    // })
    let sql=`select * from heros where id=${id}`;
    conn.query(sql,(err,result)=>{
        if(err) console.log(err);
        callback(result[0])
    })
}




// 4.删除数据--直接删除-软删除
function deletehero(id,callback){
let sql=`UPDATE heros SET isDelete = 1 WHERE id = ${id}`;
conn.query(sql,(err,result)=>{
if(err) console.log(err);
console.log(result);
callback(result);
})
}

// 实现修改
function editHero(id,data,callback){
    let sql = `UPDATE heros SET \`name\`='${data.name}',\`gender\`='${data.gender}',\`img\`='${data.img}' WHERE id = ${id}`;
conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result);
})

}

// 新增英雄
function addHero(data,callback){
    let sql = `INSERT INTO heros SET \`img\`='${data.img}',\`name\`='${data.name}',\`gender\`='${data.gender}'`;
    conn.query(sql,(err,result)=>{
    if(err) console.log(err);
    callback(result)
    })
}



module.exports={
    readJson,getHerobyId,deletehero,editHero,addHero
    
}