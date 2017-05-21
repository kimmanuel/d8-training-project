'use strict';

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.instagram = {
    attach: function attach(context) {

      /* ---------------------------
          INSTAGRAM FEED ACTIVE
      --------------------------- */
      $.fn.spectragram.accessData = {
        accessToken: '272335548.3c28bd0.85e1c6c8902b43fda40e045f9c51aeb3',
        clientID: '3c28bd07357d4dfe889c5ba2ee4fec97'
      };

      var $fullWidget = $('.instagram-feed');
      $fullWidget.spectragram('getUserFeed', $fullWidget.data());

      $('.blog-instagram-feed-widget').spectragram('getUserFeed', {
        query: 'adrianengine', // this gets adrianengine's photo feed
        size: 'small',
        max: 6
      });
    }
  };
})(Drupal, jQuery);
//# sourceMappingURL=instagram.js.map
