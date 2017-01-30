$(function() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 70) {
            $("#nav").addClass("scrolled");
        } else {
            $("#nav").removeClass("scrolled");
        }
    });
});