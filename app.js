const express=require('express');
const app=express();
const router=require('./router');
const bodyParser=require('body-parser');

app.listen(8080,'192.168.70.111',()=>{
    console.log('服务已启用，可通过 http://192.168.70.111/8080 访问');
})

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);