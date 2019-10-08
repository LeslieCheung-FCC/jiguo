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
fetch(address)
    .then(res =>res.json())
    .then((data) =>{
        var jsondata = data.data;
        for (var j = 0; j < num; j++) {
            jsondata.push(data.data[j]);
        }
        var str = '';
        for (var i = 0; i < data.data.length; i++) {
            str+= '<li><a href="../guide/details.html">';
            str+= '<div class="smalldiv">';
            str+= '<div class="middlediv">';
            str+= '<div class="boxdiv">';
            str+= '<img src='+data.data[i].img+'> ';
            str+= ' <p>'+data.data[i].p+'</p> ';
            str+= '<div class="good">';
            str+= '<p>'+data.data[i].goodone+'</p>';
            str+= '<p>'+data.data[i].goodtwo+'</p>';
            str+= ' </div> ';
            str+= '</div>';
            str+= '</div>';
            str+= '</div> ';
            str+= '</a></li>';                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        }
        $div.html(str); 
    })
}
ajaxwrite($('.list .hotlist ul'),numhot, '../json/guidejsonone.json');
ajaxwrite($('.list .newlist ul'),numnew,'../json/guidejsontwo.json');
//点击加载更多商品

$('.list .container').on('click','.listloaderspanone',function(){
     numhot+=4;
     
     if(numhot>20){
         numhot=20;
         $('.list .hotlist .listloader').html('<span>您已经到底了</span>')
     }    
     ajaxwrite($('.list .hotlist ul'),numhot,'../json/guidejsonone.json'); 
})
$('.list .container').on('click','.listloaderspantwo',function(){
    numnew+=4;
    if(numhot>12){
        numhot=12;
        $('.list .newlist .listloader').html('<span>您已经到底了</span>')
    } 
    ajaxwrite($('.list .newlist ul'),numnew,'../json/guidejsontwo.json');    
})

