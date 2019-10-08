var numhot=12;//jia载商品
var numnew=8;//jia载商品

function titletagchang() {
    $('.title ul li').click(function () {
        $(this).addClass('titleliactive').siblings().removeClass('titleliactive');
        $('.list .container>div').eq($(this).index()).show().siblings().hide();
    })
}
titletagchang();

function ajaxwrite($div,num,address) {
    $.ajax({
        url: address,
        datatype: 'json',
        success: function (data) {

            var jsondata = data.data;
            for (var j = 0; j < num; j++) {
                jsondata.push(data.data[j]);
            }
            var str = '';
            for (var i = 0; i < data.data.length; i++) {
                str += '<li>';
                str += '<img src=' + data.data[i].img + ' alt="">';
                str += ' <h2>' + data.data[i].h2 + '</h2>';
                str += ' <h3>' + data.data[i].h3 + '</h3>';
                str += ' <div class="foot">';
                str += '<div class="price">' + data.data[i].price + '</div>';
                str += ' <div class="good">';
                str += ' <p>' + data.data[i].goodone + '</p>';
                str += '<p>' + data.data[i].goodtwo + '</p>';
                str += '</div>';
                str += ' </div>';
                str += '</li>';
            }
            $div.html(str);
            titletagchang();
        }
    })
}
ajaxwrite($('.list .hotlist ul'),numhot, '../json/playjsonone.json');
ajaxwrite($('.list .newlist ul'),numnew,'../json/playjsontwo.json');
//点击加载更多商品

$('.list .container').on('click','.listloaderspanone',function(){
    numhot+=4;
    
    if(numhot>20){
        numhot=20;
        $('.list .hotlist .listloader').html('<span>您已经到底了</span>')
    }    
    ajaxwrite($('.list .hotlist ul'),numhot,'../json/playjsonone.json'); 
})
$('.list .container').on('click','.listloaderspantwo',function(){
   numnew+=4;
   if(numhot>12){
       numhot=12;
       $('.list .newlist .listloader').html('<span>您已经到底了</span>')
   } 
   ajaxwrite($('.list .newlist ul'),numnew,'../json/playjsontwo.json');    
})