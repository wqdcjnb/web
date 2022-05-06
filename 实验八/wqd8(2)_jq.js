$(init)
function init() {
    $(".m-l>li").on("click",function () {
        $(".eject-window").show();
    });
    $(".eject-window").on("click",function () {
        $(".eject-window").hide();
    });
    $(".a").find("li").on("click",function (){
        $(this).each(function (){
            $(this).addClass(".b")
                .siblings().removeClass(".b");
            var html1="";
            var index=$(this).index()+1;
            html1+=index;
            $(".b").empty();
            $(".b").append(html1);
        });
    });



}