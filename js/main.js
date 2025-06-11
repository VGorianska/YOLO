/**
 * Main JavaScript file for YOLO Travel Experience
 * Handles UI interactions, animations, and navigation
 */

$(document).ready(function() {
    // Constants
    const SCROLL_THRESHOLD = 200;
    const SCROLL_ANIMATION_DURATION = 1000;
    const MOBILE_BREAKPOINT = 768;
    
    // Cache DOM elements
    const $backToTop = $('#back-top');
    const $mobileMenu = $('.mobile-menu');
    const $navigation = $('.navigation');
    
    // Handle scroll-to-top button visibility
    $(window).scroll(function() {
        if ($(window).scrollTop() > SCROLL_THRESHOLD) {
            $backToTop.fadeIn(SCROLL_ANIMATION_DURATION);
            $navigation.addClass('scrolled');
        } else {
            $backToTop.fadeOut('slow');
            $navigation.removeClass('scrolled');
        }
    });

    // Smooth scroll to top when clicking the back-to-top button
    $('#back-top a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, SCROLL_ANIMATION_DURATION);
    });

    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $mobileMenu.slideToggle(300);
        $(this).toggleClass('active');
    });

    // Close mobile menu on window resize if screen becomes larger
    $(window).resize(function() {
        if ($(window).width() > MOBILE_BREAKPOINT) {
            $mobileMenu.removeAttr('style');
            $('.menu-toggle').removeClass('active');
        }
    });

    // Smooth scroll to sections
    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, SCROLL_ANIMATION_DURATION);
        }
    });    // Sticky menu functionality
    $(window).scroll(function() {
        if ($(window).scrollTop() > 5) {
            $('div#top').addClass('sticky');
        } else {
            $('div#top').removeClass('sticky');
        }
    });

    // Top navigation smooth scrolling
    $('#topnav a').click(function() {
        const targetLink = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(targetLink).offset().top - 40
        }, SCROLL_ANIMATION_DURATION);
    });

    // Initialize Slippry slider
    $("#demo1").slippry({
        transition: 'horizontal',
        pager: false
    });
});
	