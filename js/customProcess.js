$(document).ready(function() {
    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');
    var scrollContainer = $('.scroll-down-container');

    // Initialize Intersection Observer for hero sections
    var heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
                entry.target.querySelector('.main-heading').style.color = '#FFF';
            } else {
                entry.target.querySelector('.main-heading').style.color = '';
            }
        });
    }, { threshold: [0.5] });

    // Observe all .hero-section elements
    document.querySelectorAll('.hero-section').forEach(section => {
        heroObserver.observe(section);
    });

    // Navbar hide/show on scroll
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.css('top', '-70px');
            scrollContainer.css('opacity', 1 - st / 100);
        } else {
            navbar.css('top', '0px');
            scrollContainer.css('opacity', 1);
        }

        if (st <= 0) {
            navbar.removeClass('black-background').css('background-color', 'transparent');
        } else {
            navbar.addClass('black-background').css('background-color', 'black');
        }

        lastScrollTop = st <= 0 ? 0 : st;
    });

    // Toggle navbar on mobile view
    $('.navbar-toggler').click(function() {
        $('.veggie-menu').toggleClass('open');
        var navbarNav = $('#navbarNav');
        if (navbarNav.is(':hidden')) {
            navbarNav.slideDown(300);
            disableScroll();
        } else {
            navbarNav.slideUp(300);
            enableScroll();
        }
    });

    // Close navbar when a link is clicked in mobile view
    $('.navbar-nav .nav-link').click(function() {
        $('#navbarNav').slideUp(300);
        $('.veggie-menu').removeClass('open');
        enableScroll();
    });

    // Function to disable scrolling
    function disableScroll() {
        $('body').addClass('stop-scrolling');
    }

    // Function to enable scrolling
    function enableScroll() {
        $('body').removeClass('stop-scrolling');
    }

    // Intersection Observer for fade-in animation
    const fadeInObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInUp");
            }
        });
    }, { threshold: [0.5] }); // Adjust threshold as needed

    // Observe the welcome message section
    const welcomeSection = document.querySelector('.brief-welcome');
    fadeInObserver.observe(welcomeSection);
});
