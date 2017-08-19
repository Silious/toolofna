/**
 * Created by Evan_ on 2017/8/18.
 */
var navs = document.getElementById("nav").children;
var cs = document.getElementById("content").children;
$(function () {
    for(var i=0;i<navs.length;i++)
    {
        navs[i].index = i;
        navs[i].onclick = function (event) {
            var event = event||window.event;
            var index = event.srcElement.index;
            for(var j=0;j<cs.length;j++)
            {
                if(j==index)
                {
                    cs[j].style.display = "block";
                }
                else{
                    cs[j].style.display = "none";
                }
            }
        }
    }
}
)