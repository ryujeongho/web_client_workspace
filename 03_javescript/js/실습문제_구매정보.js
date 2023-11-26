function printValue() {
    const area = document.getElementById("area");
    
    const inputs = document.getElementsByTagName("input");
    const name = inputs[0];

    const pname = document.getElementById("pname");

    const prices = document.getElementsByName("price");
    const price = prices[0];

    area.innerText = `구입자 : ${name.value}님
구입상품 : ${pname.value} 
구매가격 : ${price.value}만원`;
}