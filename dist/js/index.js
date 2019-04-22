$(document).ready(function() {
    $(".fancybox").fancybox();
    $(".head-hamburger a").click(function(e) {
        e.preventDefault();
        $("#nav").toggle();
    });
    var e = new LazyLoad({
        elements_selector: ".lazy"
    });
});