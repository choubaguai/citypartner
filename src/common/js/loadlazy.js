$(function(){
    var num =0;
    var step =4;
    function init(){
    $.ajax({
        type:'get',
        dataType:'json',
        url:'http://182.254.146.100:3000/api/getinlanddiscount',
        success:function(data){
                console.log(data);
            var tag ='<ul class="clearfix">';
            if(num == 0){
                step=8;
            }else{
                step=4;
            }
            for(var i=num ;i<num+step;i++){
                tag +='<li><a href="incountlist.html?productId='+data.result[i].productId+'">'+
                '<div>'+data.result[i].productImg+'</div>'+
                '<h3>'+data.result[i].productName+'</h3>'+
                '<p class="price">'+data.result[i].productPrice+'</p>'+
                '<p><span>'+data.result[i].productFrom+'</span><span>'+data.result[i].productTime+'</span></p>'+
                '</a></li>';
        }
            tag += '</ul>';
            $('.ic_box').append(tag);
            num+=step;

        }

    })
    }
    init();

    var height = screen.availHeight;
    var y =0;
    $(window).on('scroll',function(){
        var cheight = $(document).height() - height;
        y = $('body').scrollTop();
        console.log(y);
       if(cheight <=y && num <20){
           init();
       }
    })



})
