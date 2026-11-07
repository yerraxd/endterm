$(document).ready(function () {
    const $topBtn = $("#back-to-top");

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $topBtn.fadeIn(200);
        } else {
            $topBtn.fadeOut(200);
        }
    });

    $topBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $("#seriesl").on("click", ".show-card", function () {
        $(this).find(".series-more").slideToggle(200);
    });

    $("#how-to-use .section-title").on("click", function () {
        $(this).next("ol").slideToggle(250);
    });
});
