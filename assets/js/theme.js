// Theme JavaScript
$(document).ready(function() {
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        }
    });
    
    // Reading time calculation
    function readingTime() {
        const text = $('.article-post-content').text();
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time + ' min read';
    }
    
    // Add reading time to posts
    if ($('.article-post-content').length) {
        $('.post-read').text(readingTime());
    }
    
});

// Navbar scroll effect
$(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
        $('.navbar').addClass('navbar-scrolled');
    } else {
        $('.navbar').removeClass('navbar-scrolled');
    }
});
