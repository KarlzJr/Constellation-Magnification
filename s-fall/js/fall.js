'use strict';

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 1000;
    var currentSlide = 1;

    //cache DOM elements
    var $carousel = $('#carousel');
    var $images = $('.images', $carousel);
    var $slides = $('.slide', $carousel);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $images.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $images.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $images
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);
    startSlider();
});
