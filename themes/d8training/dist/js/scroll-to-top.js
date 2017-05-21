'use strict';

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.scrollToTop = {
    attach: function attach(context) {

      /* --------------------------
          SMOOTH SCROLL
      -------------------------- */
      $('a.scrolltotop, .slider-area h3 a, .navbar-header a, ul#nav a').on('click', function (e) {
        e.preventDefault();

        var id = $(this).attr('href');
        var offset = 40;
        var target = $(id).offset().top - offset;

        $('html, body').animate({
          scrollTop: target
        }, 1500, 'easeInOutExpo');
      });

      /* ---------------------------
          SCROLL TO TOP
      --------------------------- */
      $(window).on('scroll', function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
          $('.scrolltotop').fadeIn();
        } else {
          $('.scrolltotop').fadeOut();
        }
      });
    }
  };
})(Drupal, jQuery);
//# sourceMappingURL=scroll-to-top.js.map
