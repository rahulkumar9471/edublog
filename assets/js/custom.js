$(document).ready(function () {
    $(".category").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    });
    $(".schools-location").slick({
        autoplay: false,
        dots: false,
        arrows: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 10,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },

        ],
    });
    $(".testimonials").slick({
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    });
});

 
document.addEventListener("DOMContentLoaded", function() {
    var scrollableDiv = document.getElementById("scrollable");
    
    // Scroll left when left button is clicked
    scrollableDiv.querySelector("::-webkit-scrollbar-button:start").addEventListener("click", function() {
        scrollableDiv.scrollLeft -= 50; // Adjust scroll amount as needed
    });
    
    // Scroll right when right button is clicked
    scrollableDiv.querySelector("::-webkit-scrollbar-button:end").addEventListener("click", function() {
        scrollableDiv.scrollLeft += 50; // Adjust scroll amount as needed
    });
}); 