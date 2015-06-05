$(document).ready(function(){

    // Ovladani navigace na mobilech
    $('.head-hamburger a').click(function(event) {
       event.preventDefault();
       $('#nav').toggle();
    });

    // Inicializace Fancyboxu
    $('.fancybox').fancybox();

})
