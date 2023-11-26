/**
 * 사용자가 좋아하는 영화를 입력 받고,
 * 이를 배열에 담아 오름차순 정렬
 * - prompt 사용
 */
function test1() {
    // ", "로 split해서 movies 배열에 담기
    const movies = prompt("🎬 좋아하는 영화를 입력하세요. 🎬").split(", ");
    // 배열에 담긴 목록을 오름차순 정렬
    const movie = movies.sort();
    // 경고창으로 출력
    alert(movie);
}

/**
 * 배열을 가지고 다음과 같은 콘솔 출력 결과를 만드세요.
 */
function test2() {
    const rainbow = ["빨", "주", "노", "초", "파", "남", "보"];
    // rainbow.length만큼 반복해서 shift로 0번지 요소를 제거
    // 제거한 요소를 push로 마지막으로 이동
    for(let i = 0; i < rainbow.length; i++) {
        console.log(rainbow);
        rainbow.push(rainbow.shift());
    }
}

/**
 * 1 ~ 100까지 순서대로 배열 arr1에 담은 후,  
 * arr2 배열에 100, 99, 98…, 3, 2, 1 순서대로 옮겨담으세요.
 */
function test3() {
    // 1 ~ 100의 정수 배열에 담기
    const arr1 = [];
    for(let i = 1; i <= 100; i++){
        arr1[i-1] = i;
    }
    // arr1 출력 확인
    console.log(arr1);

    // arr2에 arr1 전체 복제
    const arr2 = arr1.slice();

    // arr2 내림차순 정렬 후 출력 확인
    console.log(arr2.sort(function(a,b){
        return b - a;
    }))

}