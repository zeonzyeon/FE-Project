// 이메일 유효성 검사
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