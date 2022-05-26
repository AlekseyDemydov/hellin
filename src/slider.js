$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,

  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerPadding: 0,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  nextArrow: $('.reviews__btn-next'),
  prevArrow: $('.reviews__btn-prev'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
