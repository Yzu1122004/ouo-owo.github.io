$(document).ready(function(){
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});