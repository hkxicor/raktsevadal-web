/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    "use strict";

    $(function () {
        /*------------------------------  Skip Links ---------------------------------*/

        var is_webkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
                is_opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
                is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

        if ((is_webkit || is_opera || is_ie) && document.getElementById && window.addEventListener) {
            window.addEventListener('hashchange', function () {
                var id = location.hash.substring(1),
                        element;

                if (!(/^[A-z0-9_-]+$/.test(id))) {
                    return;
                }

                element = document.getElementById(id);

                if (element) {
                    if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                        element.tabIndex = -1;
                    }

                    element.focus();
                }
            }, false);
        }

        /*------------------------------ Super Fish Menu Settings ---------------------------------*/

        var breakpoint = 768,
                sf = $('.main-navigation ul.nav-menu');

        if ($(document).width() >= breakpoint) {
            sf.superfish({
                delay: 0,
                animation: {opacity: 'show', height: 'show'},
                speed: 'fast'
            });
        }

        /*------------------------------ Mobile Menu ---------------------------------*/

        var $reddrop_buddies_btn_mobile_menu = $('.menu-toggle'),
              $reddrop_buddies_primary_menu_container = $("#menu-primary-menu"); // You'll get that ID in header.php file.

        if ($reddrop_buddies_btn_mobile_menu.length === 1) {
 
            $reddrop_buddies_primary_menu_container = $reddrop_buddies_btn_mobile_menu.next('div');

            var $reddrop_buddies_primary_menu = $reddrop_buddies_primary_menu_container.find("ul:first-child");

            $reddrop_buddies_primary_menu.after("<span class='btn-menu-close'>X</span>");

            var $reddrop_buddies_sub_menu = $reddrop_buddies_primary_menu.find(".menu-item-has-children>a");

            var $reddrop_buddies_btn_menu_close = $reddrop_buddies_primary_menu_container.find('.btn-menu-close');

            $reddrop_buddies_btn_mobile_menu.on('click', function () {

                $reddrop_buddies_primary_menu.slideToggle(function () {

                    $reddrop_buddies_btn_menu_close.toggle();

                });

            });


            $reddrop_buddies_btn_menu_close.on("click", function () {
                $(this).toggle();
                $reddrop_buddies_primary_menu.slideToggle();
            });


            // New Code For Menu.

            $reddrop_buddies_sub_menu.each(function () {

                $(this).append('<span class="sub-menu-nav-arrow"><i class="fa fa-angle-down"></i></span>');

            });

            $reddrop_buddies_sub_menu.find('.sub-menu-nav-arrow').on("click", function () {

                var $parent = $(this).parent('a');

                $parent.toggleClass("sub-cat-active").next('.sub-menu').removeAttr("").toggleClass("sub-cat-show").slideToggle(500);

                if ($parent.hasClass('sub-cat-active')) {

                    $(this).html('<i class="fa fa-angle-up"></i>');

                } else {

                    $(this).html('<i class="fa fa-angle-down"></i>');

                }

                return false;

            });



        }

        // End New Code For Menu.

        $(window).on('resize', function () {

            // Super Fish Desktop Menu

            if ($(document).width() >= breakpoint & !sf.hasClass('sf-js-enabled')) {
                sf.superfish({
                    delay: 0,
                    animation: {opacity: 'show', height: 'show'},
                    speed: 'fast'
                });

                $reddrop_buddies_sub_menu.find('span').html('<i class="fa fa-angle-down"></i>'); // New Code.

            } else if ($(document).width() < breakpoint) {
                sf.superfish('destroy');
            }

            // Mobile Menu

            if ($(window).width() > 768) {
                $reddrop_buddies_primary_menu.attr("style", "inline-block");
                $reddrop_buddies_primary_menu_container.find("ul").removeAttr("style"); // New Code.
                $reddrop_buddies_btn_menu_close.removeAttr("style"); // New Code.
            }

        });

        /*------------------------------ Sticky Header ---------------------------------*/

       $(window).on("scroll", function () {

            if ($(this).scrollTop() > 0) {
                $('.header-sticky').removeClass('init-header').addClass("sticky-header");
            } else {
                $('.header-sticky').addClass('init-header').removeClass("sticky-header");
            }
            
        });

        /*------------------------------ Front End Admin Menu ---------------------------------*/

        function adjust_admin_front_menu() {

            var $wpadminbar_height = $("#wpadminbar").outerHeight();
            $(".header-style").attr("style", 'top:' + $wpadminbar_height + "px;");

        }

        if ($("#wpadminbar").length > 0) {

            $("#wpadminbar").css({
                'position': 'fixed'
            });

            adjust_admin_front_menu();

            $(window).resize(function () {
                adjust_admin_front_menu();
            });

        }


    });

}(jQuery));