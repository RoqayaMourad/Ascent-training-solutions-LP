
(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('body').addClass("scrolled");
        } else {
            $('body').removeClass("scrolled");
        }
    });

})(jQuery);
