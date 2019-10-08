// 试用切换栏
let trialTab = $('.trial-tab>div');
let contentTab = $('.content>div');
for (let i = 0; i < trialTab.length; i++) {
    trialTab[i].index = i;

    trialTab[i].onmouseenter = function () {

        for (let j = 0; j < trialTab.length; j++) {

            trialTab[j].style.color = '#000';
            trialTab[j].style.borderBottom = '2px solid #fff';

            contentTab[j].style.display = "none";

        }
        this.style.color = '#ff5a2e';
        this.style.borderBottom = '2px solid #ff5a2e';
        contentTab[this.index].style.display = "block";
    }
}

// 试用类型切换栏

let trialClass = $('.trial-class>div');
let leftBox = $('.left-box>div');
for (let i = 0; i < trialClass.length; i++) {

    trialClass[i].index = i;

    trialClass[i].onmouseenter = function () {

        for (let j = 0; j < trialClass.length; j++) {

            trialClass[j].style.color = '#000';
            trialClass[j].style.borderBottom = '2px solid #fff';
            leftBox[j].style.display = "none";

        }
        this.style.color = '#ff5a2e';
        this.style.borderBottom = '2px solid #ff5a2e';
        leftBox[this.index].style.display = "block";
        // leftBox[this.index].style.height = ;
    }
}



// 请求数据
$.ajax({
    url:'json/trial.json',
    dataType: 'json',
    success:function (res) {
        let listText = doT.template($('#listtmpl').text());
        $('#list').html(listText(res[0]));
        $('#list2').html(listText(res[0]));
        $('#list2').append(listText(res[1]));
        $('#list2').append(listText(res[2]));
        $('#list3').html(listText(res[0]));
        $('#list3').append(listText(res[1]));
        $('#list3').append(listText(res[2]));
        $('#list4').html(listText(res[0]));
        $('#list4').append(listText(res[1]));
        $('#list4').append(listText(res[2]));
        $('#list5').html(listText(res[0]));
        $('#list5').append(listText(res[1]));
        $('#list5').append(listText(res[2]));
        let index = 1;
        $('.more').click(function () {
            $('#list').append(listText(res[index]));
            index++;
            if(index>res.length){
                $('.more').html("哎呀，没有更多了").css({
                    color:'#A0AAB1',
                    background:'url("")'
                })
            }
        });



        $('.teacher-box .first').closest('li').remove();
        $('.out-box .green').closest('li').remove();
        $('.out-box .red').closest('li').remove();
        $('.apply-box .green').closest('li').remove();
        $('.apply-box .gray').closest('li').remove();
        $('.in-box .red').closest('li').remove();
        $('.in-box .gray').closest('li').remove();
    }
});



