$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav,.header__burger-line').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__nav-link, .main, .footer').click(function(event) {
        $('.header__burger,.header__nav,.header__burger-line').removeClass('active');
        $('body').removeClass('lock');
    });
});