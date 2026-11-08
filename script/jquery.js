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

$(document).on("mouseenter", ".movie-card, .series-card, .show-card", function () {
    $(this).stop(true).css("z-index", 10).animate(
        { opacity: 0.99 },
        {
            duration: 200,
            step: function (now) {
                let scale = 1 + (1 - now) * 6;
                $(this).css("transform", "scale(" + scale + ")");
            }
        }
    );
});

$(document).on("mouseleave", ".movie-card, .series-card, .show-card", function () {
    $(this).stop(true).animate(
        { opacity: 1 },
        {
            duration: 200,
            step: function (now) {
                let scale = 1 + (1 - now) * 6;
                $(this).css("transform", "scale(" + scale + ")");
            },
            complete: function () {
                $(this).css({
                    transform: "",
                    opacity: "",
                    zIndex: ""
                });
            }
        }
    );
});