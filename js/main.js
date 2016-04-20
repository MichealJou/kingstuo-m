jQuery(document).ready(function($) {
    $(".mj_information_tab .mj_tab").click(function() {
        var _this = $(this);
        var _id = $(_this).attr("id");
        var showid = $("[data-id='" + _id + "'");
        $(".mj_new_information").removeClass('mj_show');
        $(".mj_new_information").removeClass('mj_hidden')
        $(".mj_new_information").toggleClass("mj_hidden");
        console.log(showid);
        $(showid).addClass("mj_show");
        $(".mj_tab").removeClass('active');
        $(_this).addClass('active');
        $(".mj_tab").children('i').removeClass("mj_show");
        $(".mj_tab").children('i').removeClass("mj_hidden");
        $(".mj_tab").children('i').addClass("mj_hidden");
        $(_this).children('i').addClass('mj_show');

    });
});
