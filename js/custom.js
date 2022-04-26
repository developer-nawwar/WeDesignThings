/*global $, alert, console */
$(function(){
    /*trigger*/
    'use strict';
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth: '8px',
        cursorborderradius: 0,
        cursotborder: '1px solid #f7600e'
    }

    );
     /*change the header height*/
$(".header").height($(window).height());
// scroll to feature
$("#arrow").click(function(){
  // $(window).scrollTop($('.features').offset().top);
  $('html,body').animate({
      scrollTop:$('.features').offset().top
  }, 1000);

});
$(".hire").click(function(){
 
  
  $('html,body').animate({
      scrollTop: $('.our-team').offset().top
  },2000);

});
//Shoe Hidden Items From Work 
$('.show-more').click(function(){
      if ($(".our-work .hidden").is(":hidden"))
      {
              $(".show-more").text("show less");

      }
      else
      {
              $(".show-more").text("show more");
      } 
     $(".our-work .hidden").fadeToggle(500);
});
//Check Testimonials
let leftArrow=$(".testimonials .fa-chevron-left");
let rightArrow=$(".testimonials .fa-chevron-right ");
function checkTestimonials ()
{
$(".client:first").hasClass("active")? leftArrow.fadeOut() : leftArrow.fadeIn();
$(".client:last").hasClass("active")? rightArrow.fadeOut() : rightArrow.fadeIn();
}
checkTestimonials();
$(".testimonials i").click(function(){
  
  if($(this).hasClass("fa-chevron-right")){
  
     
      $(".testimonials .active").fadeOut(100, function(){
          $(this).removeClass("active").next(".client").addClass("active").fadeIn();
          checkTestimonials();
      });
  }
  else{
      $(".testimonials .active").fadeOut(100, function(){
          $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
          checkTestimonials();
      });
  }

});

  
 
  
 
});
