/* global $, alert , consle */

$(function(){
    'use strict';
    
    //adjust header height

 var myheader=$('.header');
 var myslider=$('.bxslider')
myheader.height($(window).height());

$(window).resize(function(){

    myheader.height($(window).height());
    myslider.each(function (){

  $(this).css('paddingTop',( $(window).height() - $('.bxslider li').height()  ) / 2 );

 });

});


  // links add active class

  $('.links li a').click(function () {

   $(this).parent().addClass('active').siblings().removeClass('active');
         

  });

   // adjust bxslider list item center

   myslider.each(function (){

    $(this).css('paddingTop',( $(window).height() - $('.bxslider li').height()  ) / 2 );

   });

   // trigger the bx slider
   myslider.bxSlider({
     pager:false
   });

   // smooth scrool to div 

   $('.links li a ').click(function () {

     $('html, body').animate({

        scrollTop: $( '#' + $(this).data('value') ).offset().top
     }, 1000);

   });

   // our auto slider code

   (function autoSlider(){
     $('.slider .active').each(function () {

         if(!$(this).is(':last-child')){

          $(this).delay(3000).fadeOut(2000,function () {

            $(this).removeClass('active').next().addClass('active').fadeIn();

            autoSlider();

          });

         }

         else {

          $(this).delay(3000).fadeOut(1000,function () {

            $(this).removeClass('active');

            $('.slider div').eq(0).addClass('active').fadeIn();

            autoSlider();

          });

         }



     });

   }());

});
