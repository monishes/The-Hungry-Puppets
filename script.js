$(document).ready(function() {



$('.scroll_to_home').click(function () {
       $('html, body').animate({scrollTop: $('.homepage').offset().top}, 1000); 
    });
    
    $('.scroll_to_about').click(function () {
       $('html, body').animate({scrollTop: $('.wpabout').offset().top}, 1000); 
    });
    
    $('.scroll_to_menu').click(function () {
       $('html, body').animate({scrollTop: $('.menu').offset().top}, 1000); 
    });
    
    $('.scroll_to_order').click(function () {
       $('html, body').animate({scrollTop: $('.wporder').offset().top}, 1000); 
    });

    $('.scroll_to_contact').click(function () {
       $('html, body').animate({scrollTop: $('.wpcontact').offset().top}, 1000); 
    });


});