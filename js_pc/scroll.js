        const scrollTopBtn = document.getElementById('scroll-top-btn');

        // 스크롤 시 나타나게
        window.addEventListener('scroll', function () {

            if (window.scrollY > 0) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        // 최상단으로 올라가게
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }