$(document).ready(function() {
    // Ovladani navigace na mobilech
    $(".head-hamburger a").click(function(a) {
        a.preventDefault();
        $("#nav").toggle();
    });
    // Inicializace Fancyboxu
    $(".fancybox").fancybox();
});