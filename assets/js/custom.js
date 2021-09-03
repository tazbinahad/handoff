$(document).ready(function () {
    // Fixed header on scrool down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header-area').addClass('fixed-header');
            $('.hero-slider').addClass('mt-150');
            $('.top-header').addClass('hidden');
        } else {
            $('.header-area').removeClass('fixed-header');
            $('.hero-slider').removeClass('mt-150');
            $('.top-header').removeClass('hidden');

        }
    });

    // Home: Hero slider
    $('.hero-slider').slick({
        fade: true
    });

});