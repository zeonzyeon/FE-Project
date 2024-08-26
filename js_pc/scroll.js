        // 스크롤 탑 버튼 요소 가져오기
        const scrollTopBtn = document.getElementById('scroll-top-btn');

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', function () {

            if (window.scrollY > 100) { // 스크롤이 100px 이상 내려가면 버튼 표시
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        // 스크롤 탑 함수 정의
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }