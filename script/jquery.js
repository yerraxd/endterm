$(document).ready(function () {
    const $topBtn = $("#back-to-top");

// Show the "back to top" button only after scrolling down 300px
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


$(document).on("mouseenter", ".movie-card, .series-card, .show-card", function () {
    $(this).css({
        transition: "transform 0.2s ease",
        transform: "scale(1.05)",
        zIndex: 10
    });
});

$(document).on("mouseleave", ".movie-card, .series-card, .show-card", function () {
    $(this).css({
        transform: "scale(1)",
        zIndex: 1
    });
});
