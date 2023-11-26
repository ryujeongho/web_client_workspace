const test1 = () => {
    const list = [...document.querySelectorAll('li')];
    const text = list.map(n => n.innerHTML);
    console.log(text);

    const upper = [];
    text.forEach(function(str){
        upper.push(str.toUpperCase());
    })
    console.log(upper);
};