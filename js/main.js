
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    // -------   Signup Form-----//
    $(document).ready(function() {
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }

        const LAUNCH_DATE  = '2020-11-01';

        $('#mc_embed_signup').find('form').ajaxChimp();
        
        const diffInMs   = new Date() - new Date(LAUNCH_DATE)
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        $('#tenis-games').text(diffInDays.toFixed(0) * 4)
        $('#fotbal-games').text(diffInDays.toFixed(0) * 3)
        $('#tenis-progress').width(100 - (diffInDays/4).toFixed(0)+'%');
        $('#fotbal-progress').width(100 - (diffInDays/2).toFixed(0)+'%');
    });      

 });
