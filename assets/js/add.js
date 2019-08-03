$(function(){
    $('#sub').on('click',function(){
        let data=$('#myform').serialize();
        $.ajax({
       type:'post',
       data,
       url:'http://192.168.70.111:8080/addHeros',
       success:function(res){
           if(res.code===200){
               alert(res.msg);
           }
       }
        })
    })
})