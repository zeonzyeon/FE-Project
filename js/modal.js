// let modalWindow;

// 이메일 유효성 검사 및 모달창 열기
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 패턴
    let emailInput = document.getElementById("email").value;

    if (emailInput === "") {
        alert("이메일을 입력하세요.");
        return;
    } else if (!emailPattern.test(emailInput)) {
        alert("유효한 이메일 형식을 입력하세요.");
        return;
    } else {
        modalOn();
    }
}

// 모달창 열기
// function openModalWindow() {
//     modalWindow = window.open('modal_pc.html', '_blank', 'width=600,height=400');
// }

// 모달창 닫기 및 폼 제출
// function closeModalWindow() {
//     // 창 닫기
//     window.self.close();
//     // 폼 제출
//     document.getElementById("subscribeForm").submit();
//     // 폼 제출 후 확인 문구 표시
//     alert("작성한 폼이 제출되었습니다.");
// }