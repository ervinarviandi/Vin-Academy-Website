// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: 'true',
//   fade: 'true',
//   grabCursor: 'true',
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints:{
//       0: {
//           slidesPerView: 1,
//       },
//       520: {
//           slidesPerView: 2,
//       },
//       950: {
//           slidesPerView: 3,
//       },
//   },
// });

// navbar scrooled
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    if ($(this).scrollTop() > $nav.height()) {
      $nav.addClass("scrolled");
      $nav.removeClass("navbar-dark");
      $nav.addClass("navbar-light");
    } else {
      $nav.removeClass("scrolled");
      $nav.addClass("navbar-dark");
      $nav.removeClass("navbar-light");
    }
  });
});
