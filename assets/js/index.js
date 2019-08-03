$(function(){
    $('#tbody').on('click','a:last-child',function(){
        let _this=this;
        let id=$(this).attr('data-id');
$.ajax({
    type:'get',
    url:'http://192.168.70.111:8080/deleteHero',
    data:{id},
    success:function(res){
        if(res.code===200){
            alert(res.msg);
            $(_this).parents('tr').remove();
        }
    }
})
    })
})