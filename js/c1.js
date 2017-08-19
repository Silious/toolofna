/**
 * Created by Evan_ on 2017/8/18.
 */
$(function () {
    /*左侧移动线条效果*/
    $(".c1_moline0").css({left:"0px",transition:"left 2s"});
    setTimeout(function () {
        $(".c1_moline0").css({left:"50px",transition:"left 4s"});
    },2000)
    setTimeout(function () {
        $(".c1_line0").css("top","70px");
        $(".c1_line1").css("top","70px");
        $(".c1_moline0").css({left:"-50px",transition:"left 0s"});
        $(".c1_moline1").css({left:"0px",transition:"left 2s"});
    },6000);
    setTimeout(function () {
        $(".c1_moline1").css({left:"50px",transition:"left 4s"});
    },8000);
    setTimeout(function () {
        $(".c1_line0").css("top","100px");
        $(".c1_line1").css("top","100px");
        $(".c1_moline1").css({left:"-50px",transition:"left 0s"});
    },12000);

    setInterval(function () {
        $(".c1_moline0").css({left:"0px",transition:"left 2s"});
        setTimeout(function () {
            $(".c1_moline0").css({left:"50px",transition:"left 4s"});
        },2000)
        setTimeout(function () {
            $(".c1_line0").css("top","70px");
            $(".c1_line1").css("top","70px");
            $(".c1_moline0").css({left:"-50px",transition:"left 0s"});
            $(".c1_moline1").css({left:"0px",transition:"left 2s"});
        },6000);
        setTimeout(function () {
            $(".c1_moline1").css({left:"50px",transition:"left 4s"});
        },8000);
        setTimeout(function () {
            $(".c1_line0").css("top","100px");
            $(".c1_line1").css("top","100px");
            $(".c1_moline1").css({left:"-50px",transition:"left 0s"});
        },12000);
    },12000);


    /*view rell效果*/
    $("#viewreel").mouseenter(function () {
        $(".linein").css({left:"0px",transition:"left 1s"});
        setTimeout(function () {
            $(".linein").css("overflow","visible");
            $("#viewreel").children(".viewtext").css("color","black");
            $(".viewtop").css({top:"-30px",transition:"top 1s"});
            $(".viewbottom").css({top:"0px",transition:"top 1s"});
        },1000);
        $("#viewreel").mouseleave(function () {
            $(".linein").css({left:"300px",transition:"left 0s",overflow:"hidden"});
            $(".viewtop").css({top:"0px",transition:"top 0s"});
            $(".viewbottom").css({top:"-30px",transition:"top 0s"});
            $(this).children(".viewtext").css("color","white");
        })
    })

})
