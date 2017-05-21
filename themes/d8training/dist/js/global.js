'use strict';

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.global = {
    attach: function attach(context) {

      /*--------------------------
          ACTIVE WOW JS
      ----------------------------*/
      new WOW().init();

      $(window).on('load', function () {
        /* -------------------------
            PRELOADER
        ------------------------- */
        $('.preeloader').fadeOut(1000);
      });

      /* --------------------------
          BLOG POST IMAGE SLIDER
      -------------------------- */
      $('.blog-image-sldie').owlCarousel({
        merge: true,
        video: true,
        items: 1,
        smartSpeed: 1000,
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 15,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });

      /* --------------------------
          MENU DISCOUNT SLIDER
      -------------------------- */
      $('.menu-discount-offer').owlCarousel({
        merge: true,
        video: true,
        items: 1,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 15,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
  };
})(Drupal, jQuery);
//# sourceMappingURL=global.js.map
