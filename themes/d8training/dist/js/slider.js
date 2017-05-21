'use strict';

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.slider = {
    attach: function attach(context) {

      /* ----------------------------
          SLIDER ACTIVE
      ---------------------------- */
      $('.pogoSlider').pogoSlider({
        pauseOnHover: false
      }).data('plugin_pogoSlider');
    }
  };
})(Drupal, jQuery);
//# sourceMappingURL=slider.js.map
