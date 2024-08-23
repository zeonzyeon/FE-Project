// 이메일 유효성 검사 및 모달창 열기
function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 패턴

    if (emailInput === "") {
        alert("이메일을 입력하세요.");
    } else if (!emailPattern.test(emailInput)) {
        alert("유효한 이메일 형식을 입력하세요.");
    } else {
        openModalWindow();
    }
}
// 모달창 열기
function openModalWindow() {
    window.open('modal_pc.html', 'modalWindow', 'width=600,height=400');
}
// 모달창 닫기 및 폼 제출
// document.getElementById("closeModal").onclick = function () {
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";

//     // 폼 제출
//     document.getElementById("subscribeForm").submit();
// }
// 모달창 외부 클릭시 닫기
// window.onclick = function(event) {
//     var modal = document.getElementById("modal");
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }