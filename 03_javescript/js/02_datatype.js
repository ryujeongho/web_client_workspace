// 전역

/**
 * 자바스크립트 자료형
 * - 변수의 자료형이 값에 따라 지정 (dynamic typing)
 *  
 * 1. undefined
 * 2. string
 * 3. number
 * 4. boolean
 * 5. array
 * 6. object
 * 5. function
 */
function testType() {
    // 지역

    // 변수 선언 키워드 let/const(const = 자바 final과 같음)
    let a; // undefined
    console.log(a, typeof a); // undefined 'undefined' - 자료형이 결정되지 않았을 때

    a = 100;
    console.log(a, typeof a); // 100 'number'

    a = 'hi';
    console.log(a, typeof a); // hi string

    const name = '홍길동';
    console.log(name, typeof name); // 홍길동 string
    const age = 33;
    console.log(age, typeof age); // 33 'number'
    const married = true;
    console.log(married, typeof married); // true 'boolean'
    const arr = [1, 2, 3, 4, 5];
    console.log(arr, typeof arr); // (5) [1, 2, 3, 4, 5] 'object'
    const obj = {
        username : 'honggd',
        password : '1234'
    };
    console.log(obj, typeof obj); // {username: 'honggd', password: '1234'} 'object'

    function foo() {
        console.log('😏😏😏');
    }
    console.log(foo, typeof foo); // ƒ foo() { console.log('😏😏😏'); } 'function' 함수도 하나의 자료형으로 처리
}

testType();