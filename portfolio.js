// JavaScript for portfolio scrolling
document.querySelector('.left-arrow').addEventListener('click', function() {
    document.querySelector('.portfolio-images').scrollBy({
        left: -300, // Scroll amount
        behavior: 'smooth'
    });
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    document.querySelector('.portfolio-images').scrollBy({
        left: 300, // Scroll amount
        behavior: 'smooth'
    });
});