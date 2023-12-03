/**
 * Promise
 * - 비동기작업(producing code) + 콜백(consuming code)를 명쾌히 작성하는 문법
 * 
 * - Promise 객체는 status/result 상태값을 가진다.
 *  - status : pending -> fulfilled | rejected
 *  - result : undefined -> value | error객체
 * 
 * - Promise 객체는 두 개의 callback 함수를 가진다.
 *  - resolve : 정상처리된 경우 호출하는 콜백
 *  - reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // Promise에 전달하는 함수
    // - resolve 함수
    // - reject 함수
    const promise = new Promise((resolve, reject) => {
        try {
            // 난수를 생성 시 짝수면 정상처리, 홀수면 오류!
            const n = Math.trunc(Math.random() * 100 + 1); // 1 ~ 100
            console.log('난수가 생성 되었습니다. : ', n);
            if (n % 2 == 0)
                resolve(n); // n => Promise#result
            else
                throw new Error('홀수라서 실패!!!');
        } catch (e) {
            reject(e); // e => Promise#result
        }
    });

    // callback 작성
    promise.then((value) => {
        // 성공(fulfilled) 시 콜백
        console.log(`🔫🔫🔫 ${value} 🎈🎈🎈`);
    }, (err) => {
        // 실패(rejected) 시 콜백
        console.error(err);
    });

    console.log(promise);
});


/**
 * description
 */
document.querySelector("#btn2").addEventListener('click', () => {
    delay(3000)
        .then(() => {
            // 콜백함수 
            console.log('🍔🍔🍔');
        });

    // 2초 후에 🧇🧇🧇 출력
    delay(2000)
        .then(() => {
            console.log('🧇🧇🧇');
        });
});

const delay = (millis) => {
    return new Promise((resolve, reject) => {
        // 비동기 작업
        setTimeout(() => resolve(), millis); // resolve -> {console.log('🍔🍔🍔');} millis -> 3000
    });
};


document.querySelector("#btn3").addEventListener('click', () => {
    loadScript('js/24_test.js')
        .then(() => {
            test();
        });
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve; // load이벤트 발생 시 resolve(핸들러) 호출!
    // script.onload = () => resolve(123); // result값을 전달하려면 이렇게 작성
    document.head.append(script);
});


/**
 * Promise Chain
 * - Promise는 연속적으로 사용가능하다. 콜백지옥을 then지옥으로 대체.
 * - 암묵적으로 promise 객체 반환(반환한 값이 있다면, 새 promise의 result값으로 사용된다.)
 * - 명식적으로 promise 객체를 반환할 수도 있다.
 */
document.querySelector("#btn4").addEventListener('click', () => {
    // result 값 반환
    // new Promise((resolve) => {
    //     // 비동기작업
    //     resolve(2);
    // })
    // .then((value) => {
    //     // 콜백처리
    //     console.log(value); // 2
    //     return value * 2;
    // })
    // .then((value) => {
    //     console.log(value); // 4
    // });

    // promise객체 반환
    template(3)
    .then((value) => {
        console.log((value));
        return template(value * 2);
    })
    .then((value) => {
        console.log(value);
        return template(value * 2);
    })
    .then((value) => {
        console.log(value);
        return template(value * 2);
    });

    // 1초 후에 🍕, 1초 후에 🍔, 1초 후에 🐖
    // then절 연속사용 (명시적으로 promise 반환)
    delay(1000)
    .then(() => {
        console.log('🍕');
        return delay(1000);
    })
    .then(() => {
        console.log('🍔');
        return delay(1000);
    })
    .then(() => {
        console.log('🐖');
        return delay(1000);
    });
});

const template = (value) => new Promise((resolve) => {
    resolve(value);
});


/**
 * - changeBGColor : Promise객체를 반환하는 함수 (비동기 작업)
 * - then절 (콜백함수)
 */
document.querySelector("#btn5").addEventListener('click', () => {
    const box = document.querySelector(".box");
    box.style.backgroundColor = 'red';

    changeBGColor('orange', 1000)
    .then((color) => {
        return changeBGColor('yellow', 1000);
    })
    .then((color) => {
        return changeBGColor('green', 1000);
    })
    .then((color) => {

        return changeBGColor('blue', 1000);
    })
    .then((color) => {

        return changeBGColor('navy', 1000);
    })
    .then((color) => {
        return changeBGColor('purple', 1000);
    });
});

const changeBGColor = (color, millis) => new Promise((resolve) => {
    setTimeout(() => {
        box.style.backgroundColor = color;
        resolve(); // 연속적으로 사용했을 때 없으면 다음 액션이 이어지지 않음.
    }, millis);
});