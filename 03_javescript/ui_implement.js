document.querySelector("#password").addEventListener('click', () => {
    alert("영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자");
}, {once : true});
document.querySelector("#id").addEventListener('blur', (e) => {
    const input = document.createElement("input");
    input.style.border = '0 none';
    input.placeholder = '필수 입력 항목 입니다'
    document.querySelector("#target1").appendChild(input);
}, {once : true});
document.querySelector("#password").addEventListener('blur', () => {
    const input = document.createElement("input");
    input.style.border = '0 none';
    input.placeholder = '필수 입력 항목 입니다'
    document.querySelector("#target2").appendChild(input);
}, {once : true});
document.querySelector("#password-check").addEventListener('blur', () => {
    const input = document.createElement("input");
    input.style.border = '0 none';
    input.placeholder = '필수 입력 항목 입니다'
    document.querySelector("#target3").appendChild(input);
}, {once : true});