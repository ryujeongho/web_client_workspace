/**
 * 정규표현식 Regular Expression
 * - 문자열에 대해서 유효성검사/검색/대체 등을 처리하기 위한 표현식
 * - 조건/반복처리르 내부적으로 진행해서 간결하게 작성이 가능
 * - 문법자체 숙지가 어려움.
 * - 언어독립적
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // 하나의 문자가 숫자(0123456789)인지 검사하는 정규식
    const re = /[0-9]/gi; // 정규표현식 객체 생성 gi(flag문자)
    const re2 = new RegExp(/[0-9]/gi);
    const re3 = new RegExp("[0-9]", "gi");
    // 위 3가지 모두 동일한 코드

    console.log(re, re2, re3);

    // 정규식 메소드
    // RegExp#test(string): boolean
    console.log(re.test("abc123")); // true 
    console.log(re.test("xyzㅋㅋㅋ")); // false
    // 문자열 메소드
    // String#split(re): string[]
    console.log("a1b2c3d".split(re)); // 정규식의 숫자가 구분자로 사용됨 ['a', 'b', 'c', 'd']
   
    // String#replace(re, newString): string
    console.log("abc-123".replace(re, '*')); // 숫자에 해당하는 부분이 *로 대체
    console.log("abc1def2ghi".replace(re, "<$&>")); // 매칭된 부분을 그대로 가져와서 사용하고 싶을 때 사용 abc<1>def<2>ghi 

    // String#match(re): {} 매칭된 결과를 배열로 반환
    console.log("a1b2c3d".match(re)); // ['1', '2', '3']

    // String#search(re): number 매칭된 문자열의 인덱스반환
    console.log("a1b2c3d".search(re)); // 1번지에서 처음 발견해서 1이 출력
    console.log("xyzㅋㅋㅋㅋ".search(re)); // 숫자가 없으면 -1을 반환
});

/**
 * flags 옵션
 * - g : global 전역비교 수행
 * - i : ignore 대소문자 구분안함
 * - m : multiline 여러 줄인 경우 행단위 비교
 */
document.querySelector("#btn2").addEventListener('click', (e) => {
    const src = 'JAvascript jQuery Ajax sass';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/a/, `<mark>$&</mark>`)}</p>`
    area.innerHTML += `<p>${src.replace(/a/g, `<mark>$&</mark>`)}</p>`
    area.innerHTML += `<p>${src.replace(/a/gi, `<mark>$&</mark>`)}</p>`
});

/**
 * anchor
 * - ^(캐럿) 시작
 * - $ 끝
 */
document.querySelector("#btn3").addEventListener('click', (e) => {
    const src = 'Javascript jQuery Ajax sass xxx';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/j/gi, `<mark>$&</mark>`)}</p>`; // 전체 j
    area.innerHTML += `<p>${src.replace(/^j/gi, `<mark>$&</mark>`)}</p>`; // 첫번째 j(문자열에서 j로 시작하는)만 대체
    area.innerHTML += `<p>${src.replace(/x/gi, `<mark>$&</mark>`)}</p>`; // 전체 x
    area.innerHTML += `<p>${src.replace(/x$/gi, `<mark>$&</mark>`)}</p>`; // 마지막 x(문자열에서 x로 끝나는)만 대체

    const src2 = `Javascript
jQuery
Ajax
sass
xxx`;
    area.innerHTML += `<p>${src2.replace(/^j/gim, `<mark>$&</mark>`)}</p>`; // 첫번째 j만(문자열에서 j로 시작하는) 대체(모두)
    area.innerHTML += `<p>${src2.replace(/x$/gim, `<mark>$&</mark>`)}</p>`; // 마지막 x(문자열에서 x로 끝나는)만 대체(모두)
});

/**
 * 임의의 문자 하나 (.)
 * - 문자/특수문자/공백 
 * - 개행문자는 처리되지 않음
 */
document.querySelector("#btn4").addEventListener('click', (e) => {
    const re = /^a.b/; // a로 시작 임의의 문자 b로 끝
    console.log(re.test('acb')); // true
    console.log(re.test('a b')); // true
    console.log(re.test('a*b')); // true

    console.log(re.test('ab')); // false
    console.log(re.test('a\nb')); // false

    // in다음에 한 글자로 끝나는 문자열 검사
    const re2 = /in.$/;
    console.log(re2.test('going')); // true
    console.log(re2.test('inner')); // false
    console.log(re2.test('holidayin')); // false
});

/**
 * [] 한 글자에 대한 값 목록
 * - ascii code기반으로 범위 설정 가능
 * - ^으로 시작하면 반전처리
 */
document.querySelector("#btn5").addEventListener('click', (e) => {
    const src = `ABCDEFGhijklmn 가나다라마바사ㅋㅋㅎ허ㅓㅏㅏ 1234567890 !@#$%^&*() \t\n`;
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/[aj]/gi, `<mark>$&</mark>`)}</p>` // [aj] a와j만
    area.innerHTML += `<p>${src.replace(/[^aj]/gi, `<mark>$&</mark>`)}</p>` // [^aj] aj를 제외하고 모두
    area.innerHTML += `<p>${src.replace(/^[aj]/gi, `<mark>$&</mark>`)}</p>` // a 또는 j로 시작하는 문자

    area.innerHTML += `<p>${src.replace(/[0123456789]/gi, `<mark>$&</mark>`)}</p>` 
    area.innerHTML += `<p>${src.replace(/[0-9]/gi, `<mark>$&</mark>`)}</p>` 
    area.innerHTML += `<p>${src.replace(/[abcdefghijklmnopqrstuvwxyz]/g, `<mark>$&</mark>`)}</p>` // g만 있으면 소문자만
    area.innerHTML += `<p>${src.replace(/[a-z]/g, `<mark>$&</mark>`)}</p>` // g만 있으면 소문자만
    area.innerHTML += `<p>${src.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, `<mark>$&</mark>`)}</p>` // g만 있으면 대문자만
    area.innerHTML += `<p>${src.replace(/[A-Z]/g, `<mark>$&</mark>`)}</p>` // g만 있으면 대문자만
    area.innerHTML += `<p>${src.replace(/[0-9A-Za-z]/g, `<mark>$&</mark>`)}</p>`
    // area.innerHTML += `<p>${src.replace(/[0-9A-z]/g, `<mark>$&</mark>`)}</p>` // ^도 포함됨(ascii code 순서때문에)
    area.innerHTML += `<p>${src.replace(/[가-힣]/g, `<mark>$&</mark>`)}</p>` // 한글 검색
    area.innerHTML += `<p>${src.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, `<mark>$&</mark>`)}</p>` // 자음 모음도 검색

    // 유의사항
    // 반전을 의미하려면 ^은 맨 첫째자리만 사용가능
    // Q만 확인하고 싶을때
    // /[A-Z^Q]/ 불가능 
    // /[A-PR-Z]/ 가능

    // 알파벳 소문자로 시작하는 문자열 검사
    const re = /^[a-z]/;
    console.log(re.test('abcde')); // true
    console.log(re.test('aㅏㅏㅏㅏㅏ')); // true
    console.log(re.test('ABCDE')); // false
    console.log(re.test('가나다')); // false

    // 숫자 4자리인지 검사
    const re2 = /^[0-9]{4}$/; // /[0-9][0-9][0-9][0-9]/ -> 5자리도 true로 나옴
    // /[0-9][0-9][0-9][0-9]$/ -> 4자리 검사
    console.log(re2.test('1234')); // true
    console.log(re2.test('5678')); // true
    console.log(re2.test('12345')); // false
    console.log(re2.test('abcd')); // false
    console.log(re2.test('ab12')); // false
    console.log(re2.test('12')); // false
});

/**
 * 단축문자(문자하나)
 * - \d : digit 숫자
 * - \w : word 영문자 숫자 _(언더스코어)
 * - \s : whitespace 공백/개행/탭
 * 
 * 반전
 * - \D : 숫자 아닌 문자
 * - \W : 영문자 숫자 _(언더스코어) 아닌 문자
 * - \S : 공백/개행/탭 아닌 문자
 * 
 */
document.querySelector("#btn6").addEventListener('click', (e) => {
    const src = `ABCDEFGhijklmn 가나다라마바사ㅋㅋㅎ허ㅓㅏㅏ \t\n 1234567890 !@#$%^&*()_+| \t\n s`;
    const area = e.target.nextElementSibling;
    
    area.innerHTML = `<p>${src.replace(/\d/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9]/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\w/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9A-Za-z_]/gi, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\s/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[ \t\n]/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\D/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[^0-9]/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\W/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[^0-9A-Za-z_]/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\S/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[^ \t\n]/g, `<mark>$&</mark>`)}</p>`;
});


/**
 * () 그룹핑
 * | OR
 */
document.querySelector("#btn7").addEventListener('click', (e) => {
    const src = '월요일에는 월요병, 화가 부르르르 화요일 홧병, 수수술한잔 하는 수요일, 목이 컥~ 목요일, 금방 오지 않는 금요일, 하지만 오늘은 금요일';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/(월요일|수요일|금요일)/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[월수금]요일/g, `<mark>$&</mark>`)}</p>`;
});

/**
 * Escaping
 * - ^$|[]. 문법요소를 문자그대로 사용하기 위해서는 \로 escaping처리 필수
 */
document.querySelector("#btn8").addEventListener('click', (e) => {
    const src = '3.4$';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/\$/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/\./g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/[$]/g, `<mark>$&</mark>`)}</p>`; // []안에서는 escaping 불필요(\(역슬래쉬)는 제외 --> \\ 이런식으로)
    area.innerHTML += `<p>${src.replace(/[.]/g, `<mark>$&</mark>`)}</p>`; // []안에서는 escaping 불필요

});


/**
 * 수량자 quantifier
 * - a* a가 0개 이상
 * - a+ a가 1개 이상
 * - a? a가 0, 1개
 */
document.querySelector("#btn9").addEventListener('click', (e) => {
    const src = 'aabc abc bc';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/a*b/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/a+b/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/a?b/g, `<mark>$&</mark>`)}</p>`;

    // a로 시작하고, z로 끝나는 문자열 검사
    const re = /^a.*z$/;
    console.log(re.test('abcdefghixyz')); // true
    console.log(re.test('akz')); // true
    console.log(re.test('az')); // true
    console.log(re.test('abcdex')); // false
    console.log(re.test('xyz')); // false
    console.log(re.test('안az녕')); // false

    console.log('-------------------');
    // 영문자로만 이루어진 문자열 검사
    const re2 = /^[A-Za-z]+$/;
    console.log(re2.test("ABCdef")); // true
    console.log(re2.test("ABC123def")); // false
    console.log(re2.test("")); // false
    console.log(re2.test("123")); // false
});


/**
 * 수량자
 * - a{5} a가 딱 5개
 * - a{2, 5} a가 2개이상 5개이하
 * - a{2,} a가 2개 이상
 * // a{,5} 문법 없음
 */
document.querySelector("#btn10").addEventListener('click', (e) => {
    const src = 'aa aba abba abbba';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/ab{0,}a/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/ab*a/g, `<mark>$&</mark>`)}</p>`;

    area.innerHTML += `<p>${src.replace(/ab{1,}a/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/ab+a/g, `<mark>$&</mark>`)}</p>`;

    area.innerHTML += `<p>${src.replace(/ab{0,1}a/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src.replace(/ab?a/g, `<mark>$&</mark>`)}</p>`;

    area.innerHTML += `<p>${src.replace(/ab{1}a/g, `<mark>$&</mark>`)}</p>`;

    // 숫자 4자리 체크
    const re = /^\d{4}$/;
    console.log(re.test("1234")); // true
    console.log(re.test("12345")); // false
    console.log(re.test("123")); // false
    console.log(re.test("abcd")); // false
});


/**
 * 탐색 Look Around
 * - 탐색구문은 조회에 사용되고, 매칭결과에는 반영되지 않는다.
 * 
 * - 전방탐색 Look ahead
 *  - a(?=b) b가 뒤따르는 a를 검색
 *  - a(?!b) b가 뒤따르지 않는 a를 검색
 * - 후방탐색 Look behind
 *  - (?<=b)a b가 앞에 있는 a를 검색
 *  - (?<!b)a b가 앞에 없는 a를 검색
 */
document.querySelector("#btn11").addEventListener('click', (e) => {
    const area = e.target.nextElementSibling;
    
    const src1 = 'hello world hello tom hello jane hello world';
    area.innerHTML = `<p>${src1.replace(/hello(?= world)/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src1.replace(/hello(?! world)/g, `<mark>$&</mark>`)}</p>`;

    const src2 = 'hello world lotte world t world';
    area.innerHTML += `<p>${src2.replace(/(?<=hello )world/g, `<mark>$&</mark>`)}</p>`;
    area.innerHTML += `<p>${src2.replace(/(?<!hello )world/g, `<mark>$&</mark>`)}</p>`;

});


/**
 * 비밀번호 정책
 * - 문자 8~12자리
 * - 영문자 포함
 * - 숫자 포함
 * - 특수문자(!@#$%^&*())포함
 */
document.querySelector("#password").addEventListener('blur', (e) => {
    const regexps = [/^.{8,12}$/, /[a-z]/i, /[0-9]/, /[!@#$%^&*()]+/];
    const value = e.target.value;

    // - 문자 8~12자리
    if(!regexps[0].test(value)){
        alert('비밀번호는 8~12자리여야 합니다.');
        return;
    }
    // - 영문자 포함
    if(!regexps[1].test(value)){
        alert('비밀번호는 영문자를 하나이상 포함해야 합니다.');
        return;
    }
    // - 숫자 포함
    if(!regexps[2].test(value)){
        alert('비밀번호는 숫자를 하나이상 포함해야 합니다.');
        return;
    }
    // - 특수문자(!@#$%^&*())포함
    if(!regexps[3].test(value)){
        alert('비밀번호는 특수문자(!@#$%^&*())를 하나이상 포함해야 합니다.');
        return;
    }

    alert('🔫🔫🔫 유효한 비밀번호입니다. 수고링!! 🔫🔫🔫')
});


/**
 * @실습문제 주민번호
 * - 6자리 생년월일-7자리숫자
 * - alert('유효한 주민번호입니다.')
 * - alert('유효하지 않은 주민번호입니다.')
 * 
 * - 123456-1234567 (o)
 * - 1234561234567 (x)
 * - 0123456-1234567890 (x)
 * - abcdef-abcdefg (x)
 * - 123-12345 (x)
 */
document.querySelector("#btn-ssn").addEventListener('click', (e) => {
    const ssn = document.querySelector("#ssn");
    // const re = /^[0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    const re = /^\d\d\d\d\d\d-\d\d\d\d\d\d\d$/;

    if(re.test(ssn.value)){
        alert('유효한 주민번호입니다.');
    }
    else {
        alert('유효하지 않은 주민번호입니다.');
    }
});