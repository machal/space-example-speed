$(document).ready(function() {
    $(".fancybox").fancybox();
    $(".head-hamburger a").click(function(n) {
        n.preventDefault();
        $("#nav").toggle();
    });
});