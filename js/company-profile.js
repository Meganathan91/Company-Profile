$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20)
            $("#div_back_to_top").fadeIn("slow");
        else
            $("#div_back_to_top").fadeOut("slow");

        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        $("#myBar").css("width", ((s / (d-c)) * 100) + "%");
        //$("#back_to_top").html(Math.round((s / (d-c)) * 100) + "%");
    });

    $("#back_to_top").click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});