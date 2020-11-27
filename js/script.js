$(document).ready(function() {

    // Nice Scroll
    $("html").niceScroll({
        cursorcolor: "black",
        cursorwidth: "10px"

    });

    // Carousel Timing
    $(".carousel").carousel({
        interval: 5000
    });


    // Show color option when click on the gear
    $(".cog-check").click(function() {
        $(".color-option").toggle();
    });


    // Change Theme Color By Clicking
    var coloLi = $(".color-option ul li");

    coloLi
        .eq(0).css("backgroundColor", "#F00").end()
        .eq(1).css("backgroundColor", "#3570f7").end()
        .eq(2).css("backgroundColor", "#17a22c").end()
        .eq(3).css("backgroundColor", "#adb419").end()
        .eq(4).css("backgroundColor", "#e02499");

    coloLi.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });


    // Scroll Top
    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();

        } else {
            scrollButton.hide();
        };

    });

    // Clicking Scroll Button
    scrollButton.click(function() {

        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

});


// Loading Screen
$(window).on('load', function() {

    // Show The Scroll
    $(".loading-overlay .spinner").fadeOut(2000, function() {

        $(this).parent().fadeOut(2000, function() {

            $(this).remove();

        });

        $("body").css("overflow", "auto");

    });

});