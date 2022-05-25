$('.slider-top-js').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-botton.js'
});
$('.slider-botton-js').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-top-js',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      
        breakpoint: 1366,
        settings: {
            slidesToShow: 3,
            infinite: true
        }
      
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }]
})