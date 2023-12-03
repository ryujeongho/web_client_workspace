/**
 * filter관련 메소드
 * - jQuery객체 안의 요소를 필터링한 jquery객체를 반환
 * 
 * - filter(selector)
 * - first()
 * - last()
 * - eq(n)
 * - not(selector)
 * 
 * - end() : 그 전(필터링 전) 상태로 돌아가는 메소드
 */
$(btn1).on('click', () => {
    const $h4 = $("h4");
    console.log($h4);

    console.log(
        $h4
            // .filter(".test")
            // .first()
            // .last() 
            // .eq(3)
            .not(".test") 
            .css('color', 'tomato')
            .end()
            .css('text-decoration', 'underline')
    );
});