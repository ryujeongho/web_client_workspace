/**
 * navigator
 * - 브라우져(항해사) 정보 제공 객체
 */
const test1 = () => {
    console.log(navigator);
    console.log(navigator.userAgent);
};

/**
 * location
 * - 주소창과 관련된 기능 제공 
 * - 자바스크립트를 통해 페이지 제어
 */
const test2 = () => {
    console.log(location);

    // 페이지 이동
    // location.href = "https://naver.com";

    // 페이지 새로고침
    // location.reload();
};

/**
 * history
 * - 방문기록 관련 기능제공
 * - 뒤로가기/앞으로가기/새로고침
 */
const test3 = () => {
    console.log(history);
};

/**
 * screen
 * - 브라우져가 실행 중인 모니터에 대한 정보제공
 */
const test4 = () => {
    console.log(screen);
    // availHeight 모니터 너비(px)
    // availLeft 모니터 높이(px)
    // availTop 가용 너비
    // availWidth 가용 높이
    // height 가용오프셋(왼)
    // width 가용오프셋(위)

    const width = 500;
    const height = 300;
    const top = (screen.height - height) / 2 + screen.availLeft;
    const left = (screen.width - width) / 2 + screen.availTop; 
    const popup = open("", "", `width=${width}, height=${height}, top=${top}, left=${left}`);
};