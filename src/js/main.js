$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav,.header__burger-line').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__nav-link, .hero, .why, .how, .booking-top, .booking-bottom, .testimonial, .footer').click(function(event) {
        $('.header__burger,.header__nav,.header__burger-line').removeClass('active');
        $('body').removeClass('lock');
    });
});
$(window).scroll(function() {
    var position = $(window).scrollTop(),
        block_position = $('.header').offset().top;
    if (position > block_position) {
        $('.header__nav').addClass('reverse');
    } else {
        $('.header__nav').removeClass('reverse');
    }
});