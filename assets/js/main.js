// 'use strict';
// $(window).on('load', function () {
//   $(".loader").fadeOut();
//   $("#preloder").delay(400).fadeOut("slow");
//   if ($('.course-items-area').length > 0) {
//     var containerEl = document.querySelector('.course-items-area');
//     var mixer = mixitup(containerEl);
//   }
// });
// (function ($) {
//   $('.nav-switch').on('click', function (event) {
//     $('.main-menu').slideToggle(400);
//     event.preventDefault();
//   });

//   $('.panel-link').on('click', function (e) {
//     $('.panel-link').removeClass('active');
//     var $this = $(this);
//     if (!$this.hasClass('active')) {
//       $this.addClass('active');
//     }
//     e.preventDefault();
//   });
//   $('.circle-progress').each(function () {
//     var cpvalue = $(this).data("cpvalue");
//     var cpcolor = $(this).data("cpcolor");
//     var cptitle = $(this).data("cptitle");
//     var cpid = $(this).data("cpid");
//     $(this).append('<div class="' + cpid + '"></div><div class="progress-info"><h2>' + cpvalue + '%</h2><p>' + cptitle + '</p></div>');
//     if (cpvalue < 100) {
//       $('.' + cpid).circleProgress({
//         value: '0.' + cpvalue,
//         size: 176,
//         thickness: 9,
//         fill: cpcolor,
//         emptyFill: "rgba(0, 0, 0, 0)"
//       });
//     } else {
//       $('.' + cpid).circleProgress({
//         value: 1,
//         size: 176,
//         thickness: 9,
//         fill: cpcolor,
//         emptyFill: "rgba(0, 0, 0, 0)"
//       });
//     }
//   });
// })(jQuery);


$('.single-item').slick({
  slidesToShow: 3,
  autoplay: true,
  centerPadding: '40px',
  arrows: false,
});