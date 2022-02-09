$(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".navbar").addClass("navbar-new");
        } 
        else {
            $(".navbar").removeClass("navbar-new");
        }
    });
});