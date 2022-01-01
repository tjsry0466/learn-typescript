"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 객체와 튜플 타입에서처럼 함수에서도 ?를 이용해 선택적 매개변수를 지정할 수 있다.
// 함수의 매개변수를 선언할 때 필수 매개변수를 먼저 지정하고 선택적 매개변수를 뒤에 추가한다.
function log(message, userId) {
    let time = new Date().toLocaleDateString();
    console.log(time, message, userId || 'Not singed in');
}
log('Page loaded'); // "12:38:31 PM Page loaded Not signed in" 출력
log('User signed in', 'da763be'); // "12: 38:31 PM User singed in da763be" 출력
// 자바스크립트에서는 매개변수에 기본값을 지정할 수 있다.
// 의미상으로는 호출자가 해당 매개변수에 값을 전달하지 않아도 되므로 매개변수를 선택적으로 만드는 것과 같다.
// (선택적 매개변수는 뒤에 와야 하지만 기본 매개변수는 어디에나 추가할 수있다는 점이 다르다.)
function log1(message, userId = 'Not singed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log('User clicked on a button', 'da763be');
log('User signed out');
function log2(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
// 보통 실무에서는 선택적 매개변수보다 기본 매개변수를 더 자주 사용하게 된다.
//# sourceMappingURL=%EC%84%A0%ED%83%9D%EC%A0%81%20%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EC%99%80%20%EA%B8%B0%EB%B3%B8%20%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98.js.map