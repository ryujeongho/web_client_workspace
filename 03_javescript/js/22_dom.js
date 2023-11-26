/**
 * 모든 태그객체는 Node와 Element를 상속한다.
 * 
 * - Node 
 *  - TextNode
 *  - CommentNode
 *  - Element
 * - Element (태그객체)
 * 
 * 
 * - Node#appendChild
 * - Element#append
 * 
 */
document.querySelector("#btn1").addEventListener('click', () => {
    const sample = document.querySelector("#sample");
    console.dir(sample);

    console.dir(Node.prototype);
    console.dir(Element.prototype); // Element는 태그
});

/**
 * 새로운 요소
 * 1. innerHTML
 * 2. Tag객체로 만들어서 DOM Tree에 추가
 */
document.querySelector("#btn2").addEventListener("click", () => {
    // 1. innerHTML
    // document.querySelector("#target").innerHTML = '<h2>Helloworld</h2>'; 

    // 2. Tag객체로 생성 --> 이벤트 핸들링 하기 편하다.
    const h2 = document.createElement("h2"); // <h2></h2>
    const text = document.createTextNode("Helloworld"); // 'Helloworld'
    // h2.appendChild(text); // <h2>Helloworld</h2>
    h2.append(text); // <h2>Helloworld</h2>
    document.querySelector("#target").appendChild(h2); // <div id="target"><h2>Helloworld</h2></div>
    // document.querySelector("#target").append(h2); // 위 코드와 아래 코드 어느 걸 써도 괜춘
    // 이벤트 핸들러
    h2.addEventListener("mouseover", () => {
        console.log('🙊');
    });
});

/**
 * img 태그 생성
 */
document.querySelector("#btn3").addEventListener('click', () => {
    const img = document.createElement("img"); // <img/>
    img.src = '../../sample/image/hyunta.jpg';
    img.alt = '예쁜 강아지 사진';
    img.style.width = '200px';
    document.querySelector("#target").appendChild(img);
});

/**
 * 요소 제거
 * - remove() 스스로 제거
 * - removeChild(child) 자식요소 제거
 */
document.querySelector("#btn4").addEventListener('click', () => {
    const foo = document.querySelector("#foo");
    foo.remove();
});

document.querySelector("#btn5").addEventListener('click', () => {
    const list = document.querySelector("#list");
    const foo = document.querySelector("#foo");
    // list.removeChild(foo); // 부모 기준 자식요소 제거

    // 모든 자식요소제거 -- 첫번째 요소를 지우다가 null이 반환되면 while문 탈출
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

/**
 * DOM Traversing
 * 
 * Node
 * - 자식 firstChild | lastChild | childNodes
 * - 부모 parentNode
 * - 형제 nextSibling | previousSibling
 * 
 * Element
 * - 자식 firstElementChild | lastElementChild | children
 * - 부모 parentElement
 * - 형제 nextElementSibling | previousElementSibling
 * - 특정 요소에서 DOM Tree를 따라 다음 요소를 찾아가는 기술 
 */
document.querySelector("#btn6").addEventListener('click', () => {
    const src = document.querySelector(".wrapper");
    const p1 = src.firstElementChild;
    const p5 = src.lastElementChild;
    const p = src.children;
    console.log(src, p1, p5, p);

    p1.style.color = 'hotpink';
    p5.style.color = 'hotpink';
});

document.querySelector("#btn7").addEventListener('click', () => {
    const src = document.querySelector("#p3"); // p1, p2... 어떤 걸 해도 결과는 같음
    const parent = src.parentElement;
    console.log(src, parent);
});

document.querySelector("#btn8").addEventListener('click', () => {
    const src = document.querySelector("#p3");
    // const prevSibling = src.previousElementSibling; // p3의 이전 형제 요소
    const prevSibling = src.previousElementSibling.previousElementSibling; // p3의 전전 형제 요소 p1
    // const nextSibling = src.nextElementSibling; // p3의 다음 형제 요소
    const nextSibling = src.nextElementSibling.nextElementSibling; // p3의 다다음 형제 요소 p5
    console.log(src, prevSibling, nextSibling);
});

document.querySelector("#btn9").addEventListener('click', () => {
    const wrapper = document.querySelector(".wrapper");
    Array.from(wrapper.children).forEach((child, index) => { // 가짜 배열이기 때문에 배열로 변환
        console.log(child, index);
        const newText = document.createTextNode(`🧇${index + 1}`);
        child.removeChild(child.firstChild); // Node계열의 속성(text, comment, Element)
        child.appendChild(newText);
    });
});