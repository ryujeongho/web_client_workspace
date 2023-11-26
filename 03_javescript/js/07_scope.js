 // 전역
 let a = 10;
 console.log(a);

 function foo() {
     // 지역
     let b = 20; // REPL(외부)에서 호출 불가능
     console.log(b);

     // 전역변수 접근
     a = 30; 
 }

 if(true) {
     // 지역
     let c = 99; // REPL(외부)에서 호출 불가능
     console.log(c);
 }

 for(let i = 0; i < 5; i++) { // REPL(외부)에서 호출 불가능
     // 지역
     console.log(i);
 }

//  console.log(i); 
 // 07_scope.html:37 Uncaught ReferenceError: i is not defined
 // 오류 발생으로 그 이하 코드는 실행이 안됨. 반드시 오류를 잡고 실행!!

 let j; // 전역으로 선언함으로써 REPL에서 j를 호출할 수 있음.
 for(j = 0; j < 5; j++) {
     console.log(j);
 }

 /**
  * 변수 사용 시 사용하는 키워드
  * - const 블럭 스코프. 상수 선언 시
  * - let 블럭 스코프. 변수 선언 시
  * - var 함수 스코프(함수 블럭만 인정). 변수 선언 시 // var는 쓰지 않도록 할 것
  */
function test() {
    var a = 10;
    var a = 20; // 문법오류 아님
    console.log(a);

    const b = 123;
    // b = 456; // 07_scope.js:46 Uncaught TypeError: Assignment to constant variable.

    let c = 1;
    c = 2;
    console.log(c);

    // let c = 'ㅋㅋㅋ'; // Uncaught SyntaxError: Identifier 'c' has already been declared
}