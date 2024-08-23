// const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// // Show the button when user scrolls down 100px from the top of the document
// window.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         scrollToTopBtn.style.display = 'flex';
//     } else {
//         scrollToTopBtn.style.display = 'none';
//     }
// });

// // Smooth scroll to top on button click
// scrollToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}