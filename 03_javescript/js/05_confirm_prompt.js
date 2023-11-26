/**
 * confirm
 * - 확인 true 반환
 * - 취소 false 반환
 */
function test1() {
    const bool = confirm('이 파일을 정말 삭제하시겠습니까?');
    if(bool) {
        // 삭제처리
        // ...
        alert('파일이 정상적으로 삭제되었습니다.')
    }
    else {
        // 삭제취소
        alert('파일 삭제가 취소되었습니다.')
    }
}

/**
 * prompt
 * - 사용자로부터 한 줄 입력을 받는 모달
 * - 확인 : 사용자입력값 반환
 * - 취소 : null 반환
 */
function test2() {
    const name = prompt('당신의 이름은 무엇입니까?', '홍길동');
    console.log(name);

    // boolean 자동 형변한 
    // 값이 있는 경우, true 변환 : "abc", 123, -123
    // 없는 경우, false 변환 : null, undefined, "", 0, 0.0
    if(name) {
        // 정상입력한 경우
        // alert("안녕하세요😀" + name + "님~ \n 반갑습니다.");
        alert(`안녕하세요😀 ${name} 님~
반갑습니다.`) // 개행, 공백, 탭 등을 모두 처리, 변수대입문법 지원
    }
    else {
        // 취소한 경우
        alert("이름을 정상적으로 입력해주세요😉")
    }
}