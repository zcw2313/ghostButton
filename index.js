/**
 * Created by zzjz111 on 2015/7/21.
 */
$(document).ready(function(){
    $(".button").hover(function(){
        var title = $(this).attr("data");
        $(".tip em").text(title);
        var left = $(this).position().left+10;
        var dis = ($(".tip").outerWidth()-$(this).outerWidth())/2;
        var l = left-dis;
        $(".tip").css("left",l+"px").animate({
            "top":"145px",
            "opacity":1
        },300);
    },function(){
        if(!$(".tip").is(":animated")){
            $(".tip").animate({
                "top":"100px",
                "opacity":0
            },300);
        }
    });
});