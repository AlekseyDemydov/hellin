// $('.slider-top-js').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-botton.js',
// });
// $('.slider-botton.js').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-top-js',
//   dots: false,
//   centerMode: true,
//   focusOnSelect: true,
//   prevA,
//   //   responsive: [
//   //     {
//   //       breakpoint: 1366,
//   //       settings: {
//   //         slidesToShow: 3,
//   //         infinite: true,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 7,
//   //         slidesToScroll: 1,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 480,
//   //       settings: {
//   //         slidesToShow: 3,
//   //         slidesToScroll: 1,
//   //       },
//   //     },
//   //   ],
// });

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
        // infinite: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     dots: true,
    //   },
    // },
    // {
    //   breakpoint: 300,
    //   settings: 'unslick', // destroys slick
    // },
  ],
});
