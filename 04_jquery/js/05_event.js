/**
 * mouseover/mouseout
 *  - 자식요소 접근 시에도 이벤트 발생
 * mouseenter/mouseleave
 *  - 자식요소 접근 시에도 이벤트 발생 안함
 */
$(".outer")
    // .mouseover(() => {
    //     console.log('mouseover');
    // })
    // .mouseout(() => {
    //     console.log('mouseout');
    // })
    // .mouseenter(() => {
    //     console.log('mouseenter');
    // })
    // .mouseleave(() => {
    //     console.log('mouseleave');
    // })

    // hover이벤트는 존재하지 않는다.
    .hover(() => {
        console.log('mouseenter');
    }, () => {
        console.log('mouseleave');
    });

$(title).hover((e) => {
    // e.target.classList.add('reverse') js
    $(e.target).addClass('reverse');
}, (e) => {
    // e.target.classList.remove('reverse') js
    $(e.target).removeClass('reverse');
});

/**
 * 핸들러 바인딩
 * - on
 * - off
 */
$(counter).on('click', (e) => {
   let n = $(e.target).html();
   $(e.target).html(--n);

   if(n == 0)
    $(e.target).off('click'); // 이벤트핸들러 제거
});

// 1회용
$(one).one('click', (e) => {
    console.log('🍕');
    $(e.target).html('🍕');
});


// trigger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭이벤트 발생
});

$(memo).on('keyup', (e) => {
    // console.log(e.target.value);
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? 700 : 400;
    $("#len") // 자식태그까지 처리 .text는 text만 처리
        .html(len)
        .css('color', color)
        .css('font-weight', fontWeight);
});

$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo);
    if($memo.val().length > 30) {
        e.preventDefault();
    }

    // 초기화
    // jquery객체에는 reset이 없다.
    $(e.target).get(0).reset();
});