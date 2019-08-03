
const express=require('express');
const router=express.Router();
const controller=require('./controller');

// 返回index页面
router.get('/index.html',(req,res)=>{
    controller.getIndex(req,res);
})

// 返回编辑修改的页面
router.get('/edit.html',(req,res)=>{
    controller.getEdit(req,res);
})

// 用模板引擎---编辑修改页面---js文件就可以减少一次请求
router.get('/getEdit2',(req,res)=>{
    controller.getEdit2(req,res);
})

// 给前端一个根据id获取原来的数据的接口
router.get('/getheroById',(req,res)=>{
controller.getheroById(req,res);
})

// 修改数据--把数据拿出来
router.post('/edithero',(req,res)=>{
    controller.edithero(req,res);
})

// 监听删除英雄数据接口
router.get('/deleteheroById',(req,res)=>{
    controller.deleteheroById(req,res);
})

// 新增英雄
router.get('/addHero',(req,res)=>{
    controller.addHero(req,res);
})

module.exports=router;