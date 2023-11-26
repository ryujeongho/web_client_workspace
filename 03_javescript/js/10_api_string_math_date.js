/**
 * String
 * - "", '', ``로 리터럴을 감싸서 표현
 * - String 내장객체에서 제공하는 api 사용
 */
function test1() {
    const str = "Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); // 23
    // for(let i = 0; i < str.length; i++){
    //     console.log(str[i], str.charAt(i));
    // } 한 글자씩 출력
    console.log(str.toLowerCase()); // Immutable
    console.log(str.toUpperCase()); // Immutable
    console.log(str);

    console.log(str.indexOf('Sam')); // 6
    console.log(str.indexOf('Apple')); // 0
    console.log(str.lastIndexOf('Apple')); // 18

    // substring(start, end)
    // substr(start, length)
    console.log(str.substring(6,9)); // Sam
    console.log(str.substr(6,3)); // Sam
    console.log(str.substring(6)); // Samsung PineApple
    console.log(str.substr(6)); // Samsung PineApple

    // replace(search, newStr)
    // replaceAll(search, newStr) - ECMA2021에 추가
    console.log(str.replace('Apple', '사과')); // 사과 Samsung PineApple
    console.log(str.replaceAll('Apple', '사과')); // 사과 Samsung Pine사과

    console.log(str.split(' ')); // (3) ['Apple', 'Samsung', 'PineApple']
}

/**
 * 사용자입력값에서 알파벳개수 세기
 * - prompt 통해 임의의 문자열을 받고, 알파벳 개수를 출력
 */
function test2() {
    const input = prompt('문자열을 입력하세요.');

    if(!input) {
        alert("유효한 문자열을 입력해주세요.")
        return;
    }

    let cnt = 0;
    for(let i = 0; i < input.length; i++) {
        console.log(input[i]);
        if(input[i] >= 'A' && input[i] <= 'Z')
            cnt++;
        if(input[i] >= 'a' && input[i] <= 'z')
            cnt++;
    }

    alert(`입력하신 문자열 ${input}에서 알파벳의 개수는 ${cnt}개입니다.`);
}

/**
 * Math
 * - random
 * - ceil
 * - round
 * - floor
 * - trunc
 */
function test3() {
    // 0.0이상 1.0미만의 실수를 반환
    // Math.trunc(Math.random() * 경우의 수 + 최소값)
    console.log(Math.trunc(Math.random() * 10 + 1));

    console.log(Math.ceil(12.34));
    console.log(Math.round(12.5));
    console.log(Math.floor(12.34));
    console.log(Math.trunc(12.34)); // 소수점이하 버림

    console.log(Math.floor(-3.4), Math.trunc(-3.4)); // -4  -3


    // 123.456 반올림해서 -> 123.46
    console.log(Math.round(123.456 * 100) / 100);
}

/**
 *  난수목록태그 만들고, 짝수만 컬러변경하기
 * - ul#nums하위의 li태그에 난수대입
 * - 짝수인 경우 컬러변경
 * - 매번 버튼 클릭시 숫자/컬러가 새로 지정되어야 함
 */
const list = document.querySelectorAll("ul#nums li");
function test4() {

    for(let i = 0; i < list.length; i++){
        list[i].style.color = 'initial' // 초기화를 해줘야 함 initial | inherit
        const n = Math.trunc(Math.random() * 100 + 1);
        list[i].innerHTML = n;
        n % 2 == 0 && (list[i].style.color = 'hotpink');
    }


    // const li = document.getElementsByTagName("li");
    // console.log(li);
    // for(let i = 0; i < li.length; i++){
    //     li[i].innerHTML = Math.trunc(Math.random() * 30 + 1);
    //     if(li[i].innerHTML % 2 === 0){
    //         li[i].style.color = 'red';
    //     }
    //     else{
    //         li[i].style.color = 'black';
    //     }
    // 
}

/**
 * Date
 * - 날짜/시각을 관리하는 객체
 * - 기본적으로 시스템시각을 읽어와서 사용
 */
function test5() {
    const now = new Date(); // new 생성자 함수 호출!
    console.log(now);

    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); // 0 ~ 11
    console.log(now.getDate());

    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    console.log(Date.now()); // UTC Time/초 (Epoch time)

    const date = new Date(1700460469977); // UTC Time으로 Date객체 생성하기
    console.log(date);

    // 특정 날짜/시간객체
    const someday = new Date(1999, 8, 9, 12, 30) // 월은 0-based 숫자
    console.log(someday);
}

/**
 * start, end시각을 밀리초로 각각 구해서 차이를 계산
 */
function test6() {
    // const start = Date.now();
    // foo();
    // const end = Date.now();
    // console.log((end-start), 'ms');

    console.time('Test');
    foo();
    console.timeEnd('Test');
}

function foo() {
    let sum = 0;
    for(let i = 0; i < 1000000; i++){
        sum += i;
    }
    console.log(sum);
}