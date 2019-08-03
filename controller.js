
const model=require('./model');

// index页面
function getIndex(req,res){
model.readJson((arr)=>{
    res.render('index',{arr});
})
}

// 返回编辑页面
function getEdit(req,res){
    res.render('edit');
}

// 用模板引擎---编辑修改页面---js文件就可以减少一次请求
function getEdit2(req,res){
    let id=req.query.id;
    model.getHerobyId(id,target=>{
     res.render('edit2',target);
    })
}

// 编辑页面---给当前资料判断id-如果是这个Id,就给数据
function getheroById(req,res){
    let id=req.query.id;
    model.getHerobyId(id,target=>{
        let response={};
        if(target){
            response.code=200;
            response.msg='操作成功';
            response.data=target;
        }else{
            response.code=503;
            response.msg='没有找到这个该对应的数据'
        }
       res.send(response);
    })
}

// 修改数据--以前的做法：把数据拿出来--根据id，在数组里找到对应的那一个id，找到里面对应的data
// 现在-只要设置成功，或者失败
function edithero(req,res){
let data=req.body;
// model.readJson((arr)=>{
// for(var i=0;i<arr.length;i++){
//     if(arr[i].id=data.id){
//         arr[i]=data;
//         break;
//     }
// }
// model.writeJson(arr);
// res.send({code:200,msg:'修改成功'})
// })
model.editHero(data.id,data,result=>{
let response={
    code:501,
    msg:'修改失败'
}
if(result.affectedRows===1){
    response.code=200,
    response.msg='修改成功'
}
res.send(response);
})
}

// 新增英雄
function addHero(req,res){
    // 只要把数据带回来就Ok了，id不用自己设置增添
    model.addHero(req.body,result=>{
        let response={
            code=501,
            msg='新增失败'
        }
        if(result.affectedRows===1){
            response.code=200;
            response.msg='新增成功'
        }
        res.send(response);
    })
}



// 根据id删除数据
function deleteheroById(req,res){
let id=req.query.id;
model.deletehero((id,result)=>{
let response={
    code:501,
    msg:'删除失败，没找到对应的数据'
};
if(result.affectedRows===1){
    response.code=200;
    response.msg='删除成功噢'
}
res.send(response)
})
}





module.exports={
    getIndex,getEdit,getEdit2,getheroById,edithero,deleteheroById,
    addHero
}

