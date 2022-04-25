/*global $, alert, console */
$(function(){
    /*trigger*/
    'use strict';
    $('html').nicescroll();
  
 
  
 
});
 /*change the header height*/
$(".header").height($(window).height());
  // scroll to feature
  $("#arrow").click(function(){
    // $(window).scrollTop($('.features').offset().top);
    $('html,body').animate({
        scrollTop:$('.features').offset().top
    }, 1000);

});