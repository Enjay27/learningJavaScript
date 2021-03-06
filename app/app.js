// 에러를 발생시키는 코드
const $counter = document.getElementById('counter-x');
const $increase = document.getElementById('increase');
const $decrease = document.getElementById('decrease');

let num = 0;
const render = function () { $counter.innerHTML = num; };

$increase.onclick = function () {
    num++;
    console.log('increase 버튼 클릭', num);
    render();
};

$decrease.onclick = function () {
    num--;
    console.log('decrease 버튼 클릭', num);
    render();
};