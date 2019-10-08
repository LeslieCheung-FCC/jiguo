(function () {

   // 倒计时
    var time_start = new Date().getTime(); //当前时间
    var time_end =  new Date("2019/10/07 17:00:00").getTime(); //设定目标时间2019年10月07号17点00分
    console.log(time_start);
    console.log(time_end);
    var chatime = time_end-time_start;
    console.log(chatime);
    countDown(chatime/1000);
    function countDown(times){
        var timer=null;
        timer=setInterval(function(){
            var day=0,
                hour=0,
                minute=0,
                second=0;//时间默认值
            if(times > 0){
                day = Math.floor(times / (60 * 60 * 24));
                hour = Math.floor(times / (60 * 60)) - (day * 24);
                minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            //
            // console.log(day);
            $('#dao').html('申请时间剩余：'+day+'天'+hour+'小时'+minute+'分钟'+second+"秒") ;
            // console.log('申请时间剩余：'+day+'天'+hour+'小时'+minute+'分钟'+second+"秒");
            times--;
        },1000);
        if(times<=0){
            clearInterval(timer);
        }
    }
//    轮播图
    function lunbo() {
        var timer = null;
        function bo(){
            timer = setInterval(function () {
                var div_length = $('#lunbo div').innerWidth() + 37;
                $('#lunbo').animate({'marginLeft':-div_length*4},1000,function () {
                    $('#lunbo div').slice(0,4).appendTo($('#lunbo'));
                    $('#lunbo').css({'marginLeft':'0px'});
                })
            },2000)
        }
        bo();
        var div_length = $('#lunbo div').innerWidth() + 37;
        console.log(div_length);

        $('#right').on('click',function(){
            $('#lunbo').css({'marginLeft':-div_length*4});
            $('#lunbo div').slice(-4).prependTo($('#lunbo'));
            $("#lunbo").animate({"marginLeft":"0px"},1000)

        });
        $('#left').on('click',function(){

            $('#lunbo').animate({'marginLeft':-div_length*4},1000,function () {
                $('#lunbo div').slice(0,4).appendTo($('#lunbo'));
                $('#lunbo').css({'marginLeft':'0px'});
            })
        });
        $('.lunbo div').hover(
            function () {
                clearInterval(timer)
            },
            function () {
                bo();
            }
        )
        $('.c2-left').hover(
            function () {
                clearInterval(timer)
            },
            function () {
                bo();
            }
        )
        $('.c2-right').hover(
            function () {
                clearInterval(timer)
            },
            function () {
                bo();
            }
        )


    }
    lunbo();



//    点击加载更多
    $('.c5-moro p:eq(0)').on('click',function () {
        $('.c5-moro p:eq(0)').hide();
        $('.c5-moro p:eq(1)').show();
        setTimeout(function(){
            $("#display").show();
            $('.c5-moro p:eq(1)').hide();
            },1000)
    });
    $('.c5-moro p:eq(1)').on('click',function () {
        $('.c5-moro p:eq(1)').hide();
        $('.c5-moro p:eq(0)').show();
    });


//    返回顶部
    document.onscroll = function () {
        var y = document.documentElement.scrollTop||document.body.scrollTop;
        /*console.log(y);*/
        if(y<400){
            $('.back').hide();
        }
        else{
            $('.back').show();
        }
    };

    $('.back').on('click',function () {
        var timer1 = setInterval(function () {
            var top = document.documentElement.scrollTop ||document.body.scrollTop;
            top-=100;
            document.documentElement.scrollTop = top;
            console.log(top);
            if(top<=0){
                clearInterval(timer1);
            }
        },50);
    })
})();

