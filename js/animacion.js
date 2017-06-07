$(document).ready(function(){
    setTimeout(function(){
        $('.logoint').addClass('logo');}, 1000);
    setTimeout(function(){
        $('.fl').removeClass('flint');}, 1000);
    setTimeout(function(){
       $('.superior').css({"height": 0 + "px"}, 2000);
       $('.superior').css({"opacity": 0.5});}, 2000);
    setTimeout(function(){
       $('.contenido1').css({"background-size": 100 + "%"}) 
    }, 650);
     setTimeout(function(){
       $('body').css({"background-size": 100 + "%"}) 
    }, 2050);
    setTimeout(function(){
        $('#m').removeClass('cargando');
    }, 2200);
    setTimeout(function(){
        $('body').css('overflow', 'hidden');
    }, 0);
     setTimeout(function(){
        $('body').css('overflow', 'visible');
    }, 2225);
    setTimeout(function(){
       $('div').remove('.superior'); 
    },2225);
   
});