/*-------------------------------------------------------------------*/
/* Project: Reddrop Buddies - Activism & Campaign WordPress Theme */
/* Ver: 20180401-1.0.3*/
/* Author: xenioushk*/
/*-------------------------------------------------------------------*/

/*========================================================================*/
/*   TABLE OF CONTENT
/*========================================================================*/
/*
/*  01. HELPER FUNCTIONS.
/*  02. SLIDER FUNCTIONS.
/*    02.1. STATIC BANNER.
/*  03. IMAGE GALLERY & GALLERY CAROUSEL.
/*  04. BREADCRUMB
/*  05. EVENTS
/*  06. PROCESS BLOCK
/*  07. PROCESS BLOCK
/*  08. COUNTER BLOCK
/*  09. TEAMS BLOCK
/*  10. LOGOS BLOCK
/*  11. TESTIMONIAL BLOCK
/*  12. CTA BLOCK
/*  13. BACK TO TOP BUTTON.
/*  14. PRELOADER
/*
/*========================================================================*/

(function ($) {
    "use strict";

    $(function () {
        
        // 00. RTL STATUS CHECK.
        var rtl_status = false;
        if ($('html').is('[dir]')) {
            rtl_status = true;
        }
        
 
        // 01. HELPER FUNCTIONS.

        // Adjust slider content according to screen size.
        function slider_resize() {

            if ($(window).width() > 991 && $('.header-style1').length > 0 ) {
                
                setTimeout(function () {
                     var header_style_outer_height = $('.header-style1').outerHeight();
                     $(".slider-content").attr("style", "margin-top: " + parseInt((header_style_outer_height-24)/2, 10) + "px;");
                     $('.owl-nav div').attr("style", "margin-top: " + parseInt((header_style_outer_height-24) / 2, 10) + "px;");
                    
                },500);
                
            } else {

                $(".slider-content").first().attr("style", "margin-top: 0px;");

            }
        }

        // Convert hex value to RGBA.
        function hexToRgbA(hex, opacity) {
            var c;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                c = hex.substring(1).split('');
                if (c.length == 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';

            } else {

                return 'rgba("0,0,0,' + opacity + '")';

            }
        }
        
        // Custom scripts to generate dynamic css.
        function reddrop_buddies_custom_style() {
            
            if ($(".reddrop_buddies_custom").length > 0) {
                
                var reddrop_buddies_css_string = "";

                $(".reddrop_buddies_custom").each(function () {
                    
                    if( $(this).data('custom_style') !="" ) {
                    
                        reddrop_buddies_css_string += $(this).data('custom_style');
                    
                    }

                });

                $("<style data-type='reddrop_buddies-custom-css'>" + reddrop_buddies_css_string + "</style>").appendTo('head');
                
            }
            
        }

        // add animate.css class(es) to the elements to be animated
        function setAnimation(_elem, _InOut) {
            // Store all animationend event name in a string.
            // cf animate.css documentation
            var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            _elem.each(function () {
                var $elem = $(this);
                var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                });
            });
        }
        
        var current_screen_size;
        current_screen_size = $(window).width();

        $(window).resize(function () {
            current_screen_size = $(window).width();
        })
        
        // nav menu smooth scroll
         function smooth_scrolling() {

            $(".nav_menu").on("click", function () {

                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    var offset = $('.header-style1').outerHeight();

                    if ($('.header-style1').length === 1) {
                        offset = $('.header-style1').outerHeight();
                    } else {
                        offset = parseInt(offset, 0);
                    }


                    if (target.length) {

                        var scrollTopValue;

                            scrollTopValue = target.offset().top;


                        $('html,body').animate({
                            scrollTop: scrollTopValue - parseInt(100)
                        }, 1300);

                        return false;

                    }

                }

            });

        }
        
        
        /*----- One Page Menu ----*/

        $(".one_page_menu").find('a').on("click", function () {

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                var offset = $('.header-sticky').outerHeight();

                var $wpadminbar_height = 0;

                if ($("#wpadminbar").length > 0) {

                    $wpadminbar_height = $("#wpadminbar").outerHeight() - 5;

                }

                if ($('.header-static').length === 1) {
                    offset = $('.header-static').outerHeight();
                } else if ($('.sticky-header').length === 1) {
                    offset = $('.sticky-header').outerHeight();
                } else {
                    offset = parseInt(offset, 0) * 2;
                }

                if (target.length) {

                    var scrollTopValue;

                    if (current_screen_size < 752) {
                        scrollTopValue = target.offset().top;
                    } else {
                        scrollTopValue = target.offset().top - parseInt(offset, 0) - parseInt($wpadminbar_height, 0);
                    }

                    $('html,body').animate({
                        scrollTop: scrollTopValue
                    }, 1300);

                    return false;

                }

            }

        });
        
        // adjust jumbotron content according to screen size
        function jumbotron_resize() {

            if ($(window).width() > 991) {

                var header_style_outer_height = $('.header-style1').outerHeight();
                $(".jumbotron-content").first().attr("style", "margin-top: " + parseInt(header_style_outer_height / 2, 10) + "px;");

            } else {

                $(".jumbotron-content").first().attr("style", "margin-top: 0px;");

            }

        }
        
        // 02. SLIDER FUNCTIONS.

        if ($(".slider_1").length) {
            
            var $slider_1 = $(".slider_1");

            // BG & Color Settings.;
            
            var loop_status = true,
                    nav_status = $slider_1.data('nav'),
                    nav_icon_left = $slider_1.data('nav_icon_left'),
                    nav_icon_right = $slider_1.data('nav_icon_right'),
                    nav_icons = ["<i class='fa "+nav_icon_left+"'></i>", "<i class='fa "+nav_icon_right+"'></i>"],
                    autoplay_val = true,
                    autoplaytimeout_val = 5000;
         
     
            $slider_1.find('.slider_item_container').each(function () {

                var $this = $(this);

                var bg_type="image",
                        bg_img = "",
                        solid_bg = "#000000",
                        bg_color = "#000000",
                        bg_opacity = "0.1";

                        
                // Image background with overlay color.

                if ($this.is('[data-bg_type]')) {
                    bg_type = $this.data('bg_type');
                }
                
                if ($this.is('[data-bg_img]')) {
                    bg_img = ', url("' + $this.data('bg_img') + '")';
                }

                if ($this.is('[data-bg_color]')) {
                    bg_color = $this.data('bg_color');
                }

                if ($this.is('[data-bg_opacity]')) {
                    bg_opacity = $this.data('bg_opacity');
                }
                
                // Solid background color.
                
                if ($this.is('[data-solid_bg]')) {
                    solid_bg = $this.data('solid_bg');
                }

                var $color_overlay = hexToRgbA(bg_color, bg_opacity);
                
                if( bg_type == "solid" ) {
                    
                    $this.attr("style", "background:" + solid_bg + ";");
                    
                } else {
                    
                    $this.attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay + " )" + bg_img + "; background-position: 100% top; background-repeat: no-repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");
                    
                }

            });

            slider_resize();

            $(window).resize(function () {

                if ($(window).width() > 767) {
                    slider_resize();
                } else {
                    $(".slider-content").removeAttr("style");
                }

            });

            // Carousel.
            
            if( $slider_1.find('.slider_item_container').length <= 1 ) {
                loop_status = false;
                nav_status = false;
            }
            
            // Remove Nav Icon if nav status is false.
            
            if( nav_status == false ) {
                nav_icons = [];
            }
            
            // Automatic Play

            if ($slider_1.attr('data-autoplay') && !isNaN($slider_1.data('autoplay'))) {

                autoplay_val = $slider_1.data('autoplay');
            }

            // Autoplay status.

            if ($slider_1.attr('data-autoplaytimeout') && !isNaN($slider_1.data('autoplaytimeout'))) {

                autoplaytimeout_val = $slider_1.data('autoplaytimeout');
            }
  
 
            $slider_1.owlCarousel({
                rtl: rtl_status,
                items: 1,
                loop: loop_status,
                nav: nav_status,
                navText: nav_icons,
                autoplayHoverPause: true,
                autoplay: autoplay_val,
                autoplayTimeout: autoplaytimeout_val,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        navText: []
                    },
                    600: {
                        items: 1,
                        nav: false,
                        navText: []
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            var $slider_animation = $slider_1;

            // Fired before current slide change
            $slider_animation.on('change.owl.carousel', function (event) {
                var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation($elemsToanim, 'out');
            });

            // Fired after current slide has been changed
            $slider_animation.on('changed.owl.carousel', function (event) {

                var $currentItem = $('.owl-item', $slider_animation).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation($elemsToanim, 'in');
            })


        }
        
        // 02.1. STATIC BANNER.

        if ($(".reddrop-buddies-static-banner").length) {

            $(".reddrop-buddies-static-banner").each(function () {

                var $this = $(this);

                var bg_img = "images/home_1_slider_1.jpg",
                        bg_color = "#000000",
                        bg_opacity = "0.5",
                        bg_color_2 = "#000000",
                        bg_opacity_2 = "0.8";

                if ($this.is('[data-bg_img]')) {
                    bg_img = ', url("' + $this.data('bg_img') + '")';
                } else {
                    bg_img = ', url("' + bg_img + '")';
                }

                if ($this.is('[data-bg_color]')) {
                    bg_color = $this.data('bg_color');
                }

                if ($this.is('[data-bg_opacity]')) {
                    bg_opacity = $this.data('bg_opacity');
                }

                var $color_overlay = hexToRgbA(bg_color, bg_opacity);

                $color_overlay_2 = $color_overlay;

                if ($this.is('[data-gardient]') && $this.data('gardient') == true) {


                    if ($this.is('[data-bg_color_2]')) {
                        bg_color_2 = $this.data('bg_color_2');
                    }

                    if ($this.is('[data-bg_opacity_2]')) {
                        bg_opacity_2 = $this.data('bg_opacity_2');
                    }

                    var $color_overlay_2 = hexToRgbA(bg_color_2, bg_opacity_2);

                }

                $this.closest('.vc_row-fluid').addClass('reddrop-buddies-section-banner').attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay_2 + " )" + bg_img + "; background-position: 100% top; background-repeat: repeat; background-attachment: inherit; background-size: cover; overflow:hidden;");

            });

        }
        
        // 03. IMAGE GALLERY & GALLERY CAROUSEL.

        if ($('.gallery-light-box').length) {

            $(document).ready(function () {
                $('.gallery-light-box').venobox();
            });

        }
        
        // gallery carousel.
        if ($(".gallery-carousel").length) {
            var $gallery_carousel = $('.gallery-carousel');
            $gallery_carousel.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
                
        // 04. BREADCRUMB
        
        if ($(".reddrop_buddies-breadcrumb-container").length > 0 && $('.woocommerce-breadcrumb').length > 0)  {
            
            var $woocommerce_breadcrumb= $('.woocommerce-breadcrumb'),
                  $woocommerce_breadcrumb_text= $woocommerce_breadcrumb.html();
          
            $woocommerce_breadcrumb.remove();
            $(".page-breadcrumb").html("").html($woocommerce_breadcrumb_text);
            
        }
        
        // 05. EVENTS 
        
        
         if ($(".reddrop_buddies-breadcrumb-container").length > 0 && $('.te_single_page').length > 0)  {

               var $tribe_events_single_event_title = $('.tribe-events-single-event-title');
              
               var $tribe_events_back = $('.tribe-events-back');
               
               var $tribe_default_breadcrumb = $('.page-breadcrumb');
               
               var get_updated_tribe_breadcrumb = $tribe_default_breadcrumb.html() + $tribe_events_back.html() + '/ '+ $tribe_events_single_event_title.html();
               
               var update_tribe_breadcrumb = get_updated_tribe_breadcrumb.replace("«", "");
 
                $(".reddrop_buddies-breadcrumb-container").find('h3').html("").html($tribe_events_single_event_title.html());
                
                $tribe_default_breadcrumb.html("").html(update_tribe_breadcrumb);
                
                // remove.
                
                $tribe_events_back.remove();
                
//                $('.tribe-events-sub-nav').remove();
            
        }
        
        if ($(".reddrop_buddies-breadcrumb-container").length > 0 && $('.te_events_page').length > 0)  {
                
                $('.tribe-events-page-title').remove();
                $('#tribe-events-header').remove();
            
        }
        
        
        // 06. PROCESS BLOCK
        
        if ($(".process-block").length > 0) {
            
            var count = 1;
            
            $(".process-block").each(function(){
                
                $(this).find('.step').each(function(){
                    
                    $(this).html("").html('<h3>'+count+'</h3>');
                    count++;
                    
                })

                // Reset Counter
                count = 1; 
                
            })
            
        }
        
        // 07.1 SERVICE BLOCK
        
        if ($(".process-container").length) {
            var $process_container = $('.process-container');
            $process_container.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
        
        // 07. Highlights Block
        
        if ($(".highlight-carousel").length) {
            var $highlight_carousel = $('.highlight-carousel');
            $highlight_carousel.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
         
         // 03. Fiterable Causes
        
        if( $('.filter-items').length > 0 ) {
            
            var $filter_items =  $(".filter-items");

            $filter_items.find(".filter-button").on("click", function () {
                
                $filter_items.find("button").removeClass('active');
                $(this).addClass('active');
                var value = $(this).attr('data-filter');

                if (value === "all") {

                    $('.filter').show('1000');

                } else {

                    $(".filter").not('.' + value).hide('3000');
                    $('.filter').filter('.' + value).show('3000');

                }
                
            });
        
        }
        
        
        
         // 07. Causes Block
        
        if ($(".cause-carousel").length) {
            var $cause_carousel = $('.cause-carousel');
            $cause_carousel.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
        
        // 08. COUNTER BLOCK
        
        if( $('.reddrop_buddies_counter_num').length > 0 ) {
            
            $('.reddrop_buddies_counter_num').each(function(){
                
                var $this = $(this),
                      $disable_countup = $this.data('disable_countup'),
                      $time = $this.data('time'),
                      $delay = $this.data('delay');
                      
                     if (typeof $disable_countup !== 'undefined' && $disable_countup == 1 ) {
                         
                         return '';
                         
                     } else {
                
                        $this.counterUp({
                            time: $time,
                            delay: $delay
                        });
                    
                     }
                
            });
            
        }
        
        // 09. TEAMS BLOCK

         if ($(".team-container").length) {
            var $team_container = $('.team-container');
            $team_container.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
        
        // COUNTDOWN.
    
        if( $('.reddrop_buddies_countdown').length > 0 ) {
            
            $('.reddrop_buddies_countdown').each(function(){
            
                var $this = $(this);
                
                var $countdown_date= $this.data('countdown_date');
            
                $this.countdown( $countdown_date, function (event) {
                    var $this = $(this).html(event.strftime(''
                            + '<div class="countdown_container"><h2 class="count_number">%D</h2><span class="count_text">Days</span></div>'
                            + '<div class="countdown_container"><h2 class="count_number">%H</h2><span class="count_text">Hours</span></div>'
                            + '<div class="countdown_container"><h2 class="count_number">%M</h2><span class="count_text">Minutes</span></div>'
                            + '<div class="countdown_container"><h2 class="count_number">%S</h2><span class="count_text">Seconds</span></div>'));
                });
                
            })

            

        }
    
        // 10. LOGOS BLOCK

        if ($(".logo-items").length) {
            var $logo_items = $('.logo-items');
            $logo_items.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 

        // 11. TESTIMONIAL BLOCK

        if ($(".testimonial-container").length) {
            var $testimonial_container = $('.testimonial-container');
            $testimonial_container.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
           
        // 12. CTA BLOCK
    
        if ($('.venobox').length) {

            $('.venobox').venobox();

        }   
        
        // 12.1. VIDEO BOX

        if ($('.video-box').length) {

            $(document).ready(function () {
                $('.video-box').venobox();
            });

        }
        
        // 13. Latest News Block

        if ($(".latest-news-carousel").length) {
            var $latest_news_carousel = $('.latest-news-carousel');
            $latest_news_carousel.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
        
        // 13. Latest News Block

        if ($(".ecs-event-carousel").length) {
            var $ecs_event_carousel = $('.ecs-event-carousel');
            $ecs_event_carousel.each(function () {
                var $this = $(this);

                var items_val = 3,
                        nav_val = false,
                        dots_val = true,
                        autoplay_val = true,
                        autoplaytimeout_val = 5000;
                // Status.
                if ($this.attr('data-carousel') && $this.data('carousel') !== 1) {

                    $this.removeClass('owl-carousel');
                    return '';
                }
                // no of items
                if ($this.attr('data-items') && !isNaN($this.data('items'))) {
                    items_val = $this.data('items');
                }
                // navigation status.
                if ($this.attr('data-nav') && !isNaN($this.data('nav'))) {
                    nav_val = $this.data('nav');
                }

                // navigation status.
                if ($this.attr('data-dots') && !isNaN($this.data('dots'))) {
                    dots_val = $this.data('dots');
                }
                // Autoplay status.
                if ($this.attr('data-autoplay') && !isNaN($this.data('autoplay'))) {
                    autoplay_val = $this.data('autoplay');
                }
                // Autoplay status.
                if ($this.attr('data-autoplaytimeout') && !isNaN($this.data('autoplaytimeout'))) {
                    autoplaytimeout_val = $this.data('autoplaytimeout');
                }

                $this.owlCarousel({
                    rtl: rtl_status,
                    items: items_val,
                    loop: true,
                    autoplay: autoplay_val,
                    autoplayTimeout: autoplaytimeout_val,
                    autoplayHoverPause: true,
                    dots: dots_val,
                    nav: nav_val,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false
                        },
                        1000: {
                            items: items_val
                        }
                    }
                });
            });
        } 
        
        //Calling Smooth Scroll Function.
        smooth_scrolling();
           
        // 13. BACK TO TOP BUTTON.

        if ($('#backTop').length === 1) {

            $('#backTop').backTop({
                'rtl': rtl_status,
                'theme': 'custom'
            });

        }
        
        // Finally Add All Custom Stylesheets.
        
        reddrop_buddies_custom_style();
        
         // 14. PRELOADER

        $(window).on("load", function () {

            $("#preloader").fadeOut(500);

        });

    });

}(jQuery));