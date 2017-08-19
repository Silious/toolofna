/**
 * Created by Evan_ on 2017/8/18.
 */
$(function () {
    /*导航栏效果*/
    var work_nav_li = $("#work_nav").children("ul").children("li");
    for(var x=0;x<work_nav_li.length;x++){
        work_nav_li[x].onmouseover = function () {
            $(this).css("color","red");
            $(this).children("span").css("borderBottom","4px solid red");
        }
        work_nav_li[x].onmouseout = function () {
            $(this).css("color","white");
            $(this).children("span").css("borderBottom","0px solid red");
        }
    }

})


/*
 * 滚动面板区域
 * */
//计算底部滑动条的宽度
var length = $(".framebar").width()*($(".frametop").width()/$(".content-frame").width());
$(".slide-bar").css("width",length);
$("#nav").children(1).click(function () {
    setTimeout(function () {
        $(".content_img").addClass("change");
    },100);
});
var down = false;
$(".framebar").on("mousedown",function(){
    down = true;
});
$(document).on({
    "mouseup":function(){
        down = false;
    },
    "mousemove":function(){
        if(down){
            //阻止鼠标默认事件
            event.stopPropagation();
            event.preventDefault();
            var x = event.clientX;
            var left = x - $(".framebar").offset().left-$(".slide-bar").width()/2;
            move(left);
        }
    }
});
var dis = 0;
$(window).on("mousewheel",function(event){
    //监听滚轮的上下移动
    var value =  event.originalEvent.detail || event.originalEvent.wheelDelta;
    if(value>0){
        dis +=5;
    }else{
        dis-=5;
    }
    move(dis);
});
function move(dis){
    $(".slide-bar").css("left",dis);
    //实现联动
    var botton_total = $(".framebar").width()-$(".slide-bar").width();
    var top_total = $(".content-frame").width()-$(".frametop").width();
    var distance = (dis / botton_total)*top_total;
    $(".content-frame").css("left",-distance);
    if($(".slide-bar").position().left<0){
        $(".slide-bar").css("left",0);
        $(".content-frame").css("left",0);
    }
    if($(".slide-bar").position().left>($(".framebar").width()-$(".slide-bar").width())){
        $(".slide-bar").css("left",($(".framebar").width()-$(".slide-bar").width()));
        $(".content-frame").css("left",-top_total);
    }
}