// Summary: Slider
// Description: Loops through images on the website
// @author Alejandra Sicairos and @credits - https://www.youtube.com/watch?v=KkzVFB3Ba_o
// @created  5.19.22

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 2000;
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

    // $images.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();
});

//FLASHLIGHT
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
