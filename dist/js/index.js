$(document).ready(function() {
    $(".head-hamburger a").click(function(n) {
        n.preventDefault();
        $("#nav").toggle();
    });
    $(".fancybox").fancybox();
});