(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slides").owlCarousel({
            
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay:false,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
            
        });
        
        $(".team-list").owlCarousel({
            
            items:3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:false,
            
        });
        
         $(".testimonial-list").owlCarousel({
            
            items:3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:false,
            
        });
          $(".logo-carousel").owlCarousel({
            
            items:5,
            loop:true,
            margin:30,
            nav:false,
            dots:false,
            autoplay:true,
            
        });
        
        $("#web-design-skillbar").circleProgress({
            value: 0.9,
            size: 250,
            thickness:3,
            fill:'#24BAC2',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });
           
        $("#Graphic-design-skillbar").circleProgress({
            value: 0.95,
            size: 250,
            thickness:3,
            fill:'#24BAC2',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });
           
        $("#Digital-Marketing-skillbar").circleProgress({
            value: 0.84,
            size: 250,
            thickness:3,
            fill:'#24BAC2',
        }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });
      
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	