$(function(){
    // 给完成发送注册事件
    $('#sub').on('click',function(){
        let data=$('#form').serialize();
        $.ajax({
            type:'post',
            url:'http://192.168.70.111/8080/edithero',
            data,
            success:function(res){
                if(res.code===200){
                    alert(res.msg);
                }
            }
        })
    })
})