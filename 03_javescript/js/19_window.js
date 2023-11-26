/**
 * window
 * - 브라우져 최상위객체
 * - 탭별로 하나 씩 존재함.
 * - BOM Browser Object Model - navigator, history, screen, ...
 * - DOM Document Object Model - document
 * - Javascript Object
 * - ...
 */
const test1 = () => {
    console.log(window);
};

/**
 * open
 * - 새 창(탭/팝업)을 여는 함수
 * - 새 창 window객체를 반환. 이를 통해 해당 창에 대한 제어가능
 */
const test2 = () => {
    // open(url, name, spec)
    const newWindow = open('01_hellojs.html', 'hellojs', 'width=500, height=300, top=400, left=400');
    // const newWindow = open('01_hellojs.html', '_self',); // name에 _self를 입력하면 현재 탭을 대체
    console.log(newWindow); // 팝업창
    console.log(newWindow.opener); // 현재창


    setTimeout(() => {
        // newWindow.close(); // 3초 후 새 창을 닫아주는 함수
        // newWindow.alert('🎈🎈🎈') // 팝업창
        newWindow.document.write('<h1>🐽🐽</h1>'); // 기존 h1태그 변경
        newWindow.opener.alert('🎈🎈🎈') // 현재창
    }, 3000); 
};

/**
 * Time API - setTimeout
 * - milli초 후에 callback함수 실행
 * - js시간은 쓰레드스케쥴링에 의해 늘어질 수 있다.
 */
const test3 = () => {
    const timeoutId = setTimeout(() => {
        alert('🥸🥸🥸');
    }, 1000);
    console.log(timeoutId);
};

// (() => {
//     setTimeout(() => {
//         console.log('회원가입 후 더 많은 혜택을 누리세요~~');
//     }, 5000); // setTimeout은 즉시 실행이고 log가 5초 후 실행
// })();

/**
 * setInterval(callbackFunction, millis)
 * - millis초 후에 callbackFunction을 실행
 * - millis초 간격으로 callbackFunction을 실행
 * - clearInterval(id)로 취소하기 전까지 실행
 */
let intervalId;
const test4 = () => {
    let i = 1;
    intervalId = setInterval(() => {
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다.');
};

/**
 * 사용자 타이머
 */
let timeoutId;
const test5 = () => {
    const messageVal = message.value;

    // 유효성검사
    if(!message.value || !sec.value) {
        alert('유효한 값을 입력하세요!!!')
        return;
    }

    console.log(message.value, sec.value);
    timeoutId = setTimeout(() => {
        alert(messageVal);
        console.log(timeoutId, '번 타이머가 설정되었습니다.');
        timeoutId = undefined; // id제거
    }, sec.value * 1000); // sec.value * 1000은 자동 형변환

    // 초기화
     message.value = '';
     sec.value = '';
};

const test6 = () => {
    if(timeoutId){
        clearTimeout(timeoutId);
        alert('타이머가 취소 되었습니다.');
    }
};

/**
 * 초시계
 */
const f = (n) => n < 10 ? '0' + n : n;
const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
};

const displayClock = () => document.querySelector('#clock-display').innerHTML = clock();
displayClock(); // 처음부터 화면에 띄우기 위해서 실행
setInterval(displayClock, 1000); // 그 이후에 1초마다 실행