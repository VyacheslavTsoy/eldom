$(window).load(function(){
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 50,
        itemMargin: 10,
        asNavFor: '#slider_object'
    });

    $('#slider_object').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});