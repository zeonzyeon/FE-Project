# 랜딩 페이지 프로젝트

## 1. 프로젝트 소개
<img src="image_README.md/figma.png" width="250" height="auto"/>

이 프로젝트는 피그마 디자인을 참고하여 구현된 웹페이지입니다. 총 2가지의 프로젝트가 있습니다. 하나는 일반 웹 화면용이며, 다른 하나는 모바일 화면을 고려한 프로젝트입니다. 각 프로젝트는 HTML, CSS, JavaScript를 사용하여 구현되었습니다.


## 2. 개발 기간
- **PC 버전 개발**: 2024년 8월 19일 - 2024년 8월 23일
- **모바일 버전 개발**: 2024년 8월 26일 - 2024년 8월 27일
- **최종 수정 및 문서화**: 2024년 8월 28일


## 3. 개발 환경 및 배포 URL
### 개발 환경
<img src="image_README.md/visual_studio_code.png" width="300" height="auto"/>

- **개발 도구**: Visual Studio Code
- **언어**: HTML, CSS, JavaScript
- **버전 관리**: Git
- **기타**: 피그마(Figma)를 참고하여 디자인 구현

### 배포 URL
- PC버전: https://zeonzyeon.github.io/FE-Project/hodu_pc.html
- Mobile 버전: https://zeonzyeon.github.io/FE-Project/hodu_mobile.html


## 4. 사용 기술
<img src="image_README.md/html_css_js.png" width="300" height="auto"/>

- HTML: 페이지의 구조 및 콘텐츠를 정의합니다.
- CSS: 페이지의 스타일링과 레이아웃을 담당합니다.
- JavaScript: 페이지의 동적 동작을 구현합니다. 스크롤 이벤트, 모달창 동작, 이메일 유효성 검사 등의 기능을 처리합니다.


## 5. 요구사항
1. **피그마를 참고하여 페이지 구현을 합니다.**
2. **모바일 화면도 고려하여 페이지 구현을 합니다.**
3. **스크롤 시 헤더가 고정되게 합니다.** 
   - 처음에는 고정된 상태가 아닙니다.
4. **스크롤 탑 버튼을 구현합니다.**
   - 스크롤 시 나타납니다.
   - 푸터 아래로 내려가지 않습니다.
   - 버튼을 누르면 스크롤이 최상단으로 부드럽게 올라갑니다.
5. **구독하기 모달창을 구현합니다.**
   - 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
   - 이메일 유효성 검사를 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 표시됩니다.)
   - 이메일이 잘 입력되었다면 모달창이 나타납니다. 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.


## 6. 개발 화면

### PC 버전

| header, main                       | section                              |
|------------------------------------|--------------------------------------|
| ![header, main](image_README.md/스크린샷%202024-08-28%20111121.png) | ![section](image_README.md/스크린샷%202024-08-28%20111227.png) |

| section                            | aside                                |
|------------------------------------|--------------------------------------|
| ![section](image_README.md/스크린샷%202024-08-28%20111259.png) | ![aside](image_README.md/스크린샷%202024-08-28%20111329.png) |

| footer                             | modal                                |
|------------------------------------|--------------------------------------|
| ![footer](image_README.md/스크린샷%202024-08-28%20111410.png) | ![modal](image_README.md/스크린샷%202024-08-28%20111846.png) |

### Mobile 버전

| header, main                       | nav                                  | section                              |
|------------------------------------|--------------------------------------|--------------------------------------|
| ![header, main](image_README.md/스크린샷%202024-08-28%20112039.png) | ![nav](image_README.md/스크린샷%202024-08-28%20112112.png) | ![section](image_README.md/스크린샷%202024-08-28%20112142.png) |

| aside                              | footer                               | modal                                |
|------------------------------------|--------------------------------------|--------------------------------------|
| ![aside](image_README.md/스크린샷%202024-08-28%20112405.png) | ![footer](image_README.md/스크린샷%202024-08-28%20112439.png) | ![modal](image_README.md/스크린샷%202024-08-28%20132546.png) |


## 6. 주요 기능

### 스크롤 이벤트
```html
<button id="scroll-top-btn" onclick="scrollToTop()"></button>
```
```javascript
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
```
```javascript
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});
```

---

### 이메일 유효성 검사
```html
<form id="subscribeForm" onsubmit="submitEmail(event)" action="" method="POST" class="email-form">
    <label for="email">
        <img src="image/mail.png" alt="Mail Icon" class="mail-icon">
    </label>
    <input type="email" id="email" name="email" placeholder="Enter your e-mail address" required>
    <button id="modal-btn" type="button" onclick="validateEmail()">Subscribe</button>
</form>
```
```javascript
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInput = document.getElementById("email").value;

    if (emailInput === "") {
        alert("이메일을 입력하세요.");
    } else if (!emailPattern.test(emailInput)) {
        alert("유효한 이메일 형식을 입력하세요.");
    } else {
        modalOn();
    }
}
```

---


### 모달창 동작
```javascript
<script>
    const modalBtn = document.getElementById("modal-btn");
    const modalOffBtn = document.getElementById("modal-off-btn");
    const modal = document.getElementById("modal");

    function modalOn() {
        modal.style.display = "flex";
    }
    function modalOff() {
        modal.style.display = "none";
    }
    function submitEmail(event) {
        alert("이메일이 제출되었습니다.");
        document.getElementById("emailForm").submit();
    }
    modalOffBtn.addEventListener("click", e => {
        submitEmail();
        modalOff();
    })
</script>
```
```html
<div id="modal" class="modal">
    <div class="modal-content">
        <img src="image/modal_cat.png" alt="Cat Icon">
        <div class="modal-text-box">
            <h2>Thank you!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
        </div>
        <button id="modal-off-btn" type="button" onclick="modalOff()">OK! I Love HODU</button>
    </div>
</div>
```


## 7. 개발하며 느낀점
이번 프로젝트는 처음으로 HTML, CSS, 그리고 JavaScript를 사용하여 실제 웹페이지를 구현해본 경험이었습니다. 프로젝트를 시작할 때만 해도 웹페이지의 구조를 어떻게 짜야 할지 막막했고 CSS를 사용해 피그마의 디자인을 정확히 재현하는 과정이 생각보다 까다로웠습니다. 작은 요소 하나하나를 디자인에 맞춰 구현하려다 보니 때때로 답답함을 느끼기도 했습니다. 그리고 PC와 모바일 환경에 각각 별도로 최적화된 웹페이지를 개발하다 보니 개발 시간의 비효율성을 체감했는데 반응형 웹 디자인을 적용하지 못한 것이 매우 아쉽지만 이번 프로젝트를 통해 반응형 웹 디자인의 중요성을 깨닫게 되었습니다.

이러한 과정을 통해 저는 프론트엔드 개발의 기초를 탄탄하게 다질 수 있었고, 실제로 사용자가 접하게 될 화면을 직접 만들어 나가는 데서 큰 보람을 느꼈습니다. 특히, 프로젝트를 진행하며 스스로 부족한 부분을 깨닫고 그에 대해 학습해 나가면서 점차 나아지는 모습을 보며 성취감도 느낄 수 있었습니다. 단순히 코드를 작성하는 것을 넘어서 사용자 경험을 고려한 디자인과 기능 구현의 중요성을 깊이 이해하게 된 유익한 시간이었다고 생각합니다.

이 프로젝트는 저에게 프론트엔드 개발의 기초뿐만 아니라, 지속적인 학습과 개선의 중요성 또한 깨닫게 해준 의미 있는 경험이었습니다. 앞으로도 이러한 경험을 바탕으로 더 나은 웹페이지를 구현해 나가고 싶습니다.
