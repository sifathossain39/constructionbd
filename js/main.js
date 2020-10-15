$(document).ready(function () {


    // STICKY NAV initialization
    $(".js-card-scetion").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    $(".js-des-section").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

});

// initialization AOS
AOS.init();


// Parllax in carousal initialization START ============

$('.parallaxie').parallaxie();

$('.parallaxie').parallaxie({
    speed: 0.7
});

// image parallax
$('.jarallax').jarallax({
    speed: 0.7
});
// Parllax in carousal initialization END ===XXX=======

// SHOWCASE CAROUSEL Flickity START ===============
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 10000,
    groupCells: 2
    
  });

// SHOWCASE CAROUSEL Flickity END ===XXX=======
