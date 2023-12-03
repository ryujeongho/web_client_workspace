const $ = (selector) => {
    return new jhQuery(selector);
};

class jhQuery {
    constructor(selector) {
        const elems = document.querySelectorAll(selector);
        this.length = elems.length;
        for(let i = 0; i < elems.length; i++) {
            this[i] = elems[i];
        }
    }
    css(name, value) {
        for(let i = 0; i < this.length; i++) {
            this[i].style[name] = value;
        }
        return this; // 메소드 체이닝을 위해서 작성
    }

    click(f) {
        for(let i = 0; i < this.length; i++) {
            this[i].addEventListener('click', f);
        }
        return this;
    }

    html(value) {
        for(let i = 0; i < this.length; i++) {
            this[i].innerHTML = value;
        }
        return this;
    }
}