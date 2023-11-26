const foo = document.querySelector("#foo");
const bar = document.querySelector("#bar");

/**
 * innerHTML
 * - (getter) 자식태그가 포함된 내용을 반환
 * - (setter) 내용을 설정. html태그처리(DOM 등록)
 */
function test1() {
    console.log(foo.innerHTML); // getter
    bar.innerHTML = foo.innerHTML; // setter + getter
}

/**
 * innerText | textContent
 * - (getter) 자식 html을 제외한 내용을 반환
 * - (setter) 텍스트로서 내용 추가(html태그도 문자로 처리)
 */
function test2() {
    console.log(foo.innerText); // getter <mark>삭제 후 출력
    bar.innerText = foo.innerHTML; // setter <mark>태그를 문자로 출력
}

/**
 * outerHTML
 * - (getter) 태그 자신을 포함해서 자식태그까지 반환
 * - (setter) 태그 자신을 교체
 */
function test3() {
    console.log(foo.outerHTML);
    foo.outerHTML = "<p id='soo'>안녕</p>";
}