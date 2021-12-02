(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#navsticky').addClass('nav-margin');
        } else {
            $('#navsticky').removeClass('nav-margin');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#navsticky').addClass('height-66');
        } else {
            $('#navsticky').removeClass('height-66');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.blackstone').addClass('blackstone-brand');
        } else {
            $('.blackstone').removeClass('blackstone-brand');
        }
    });
})(jQuery);