// Summary: Slider
// Description: Loops through images on the website
// @author Alejandra Sicairos and @credits - https://www.youtube.com/watch?v=KkzVFB3Ba_o
// @created  5.19.22

$(function() {

    //settings for slider
    var width = 800;
    var animationSpeed = 1000;
    var pause = 3000;
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

    $images.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
});
