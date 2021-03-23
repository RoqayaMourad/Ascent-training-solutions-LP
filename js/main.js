
(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

	var menuSelector = $('.mainmenu ul');
	menuSelector.slicknav({
        prependTo: '.navbar-header',
        label: ''
    });
    
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();


/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    // $(window).on( 'scroll', function () {
    //     if ($(this).scrollTop() > 600) {
    //         $('#scroll-top').fadeIn();
    //     } else {
    //         $('#scroll-top').fadeOut();
    //     }
    // });

})(jQuery);
