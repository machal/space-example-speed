$(document).ready(function(){

    // Inicializace Fancyboxu
    $('.fancybox').fancybox();

    // Ovladani navigace na mobilech
    $('.head-hamburger a').click(function(event) {
      event.preventDefault();
      $('#nav').toggle();
    });

    // Lazy loading
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    });

})
