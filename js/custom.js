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
//Shoe Hidden Items From Work 
$('.show-more').click(function(){
    // switch($(".our-work .hidden:visible"))
        
    // }
   if ($(".our-work .hidden").is(":hidden")){
       $(".show-more").text("show less");

   }
   else{
    $(".show-more").text("show more");

   }
 
  
$(".our-work .hidden").fadeToggle(1000);



    


    
    
})