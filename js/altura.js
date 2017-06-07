$(document).ready(function(){
	var altura = $('.contenido').offset().top;
    
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 140){
		    $('#l').attr('src', 'img/logi.png');
            $('#l').attr('width', '100px');
            $('#l').css('padding-top', '15px');
            $('#l').css('margin-left', '100px');
            $('.barra').addClass('fixed');
            $('.s').removeClass('menu');
            $('.logo').css('float', 'left');
            $('.banner').css('margin-top', '0px');
            $('.logo').css('width', '100px');
            $('nav').css('float', 'right');
            $('nav').css('margin-right', '80px');
            $('nav').addClass('down');
            $('nav').removeClass('int');
            $('#l').hover(function(){
            $('#l').attr('src', 'img/logir.png');
            },function(){
            $('#l').attr('src', 'img/logi.png');
            });
            
            
            
		}
		else{
            $('#l').attr('src', 'img/logo.png');
            $('#l').attr('width', '225px');
            $('#l').css('padding-top', '0px');
            $('#l').css('margin-left', '0px');
            $('.logo').css('width', '225px');
            $('.banner').css('margin-top', '25px');
            $('.logo').css('float', 'none');
            $('.barra').removeClass('fixed');
            $('.s').addClass('menu');
            $('nav').css('float', 'none');
            $('nav').css('margin', '0 auto');
            $('nav').removeClass('down');
            $('nav').addClass('int');
            $('#l').hover(function(){
            $('#l').attr('src', 'img/logo.png');
            },function(){
            $('#l').attr('src', 'img/logo.png');
            });
           
            
		}
	});	
	
});