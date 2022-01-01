"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 인수를 여러 개 받는 함수라면 그 목록을 배열 형태로 건넬 수도 있다.
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]); // 6으로 평가
// 때로는 (인수의 개수가 고정된) 고정 인자 API가 아니라 (인수의 개수가 달라질 수 있는 ) 가변 인자 API가 필요할 때도 있다.
// 전통적으로 자바스크립트는 요술 같은 arguments 객체를 통해 이 기능을 제공했다.
// 자바스크립트는 런타임이 함수에 자동으로 arguments를 정의해 개발자가 함수로 전달한 인수 목록을 할당한다는 점에서 '요슐' 같은 일이다.
// arguments는 일종의 배열(순수한 배열은 아님)이므로, .reduce 같은 내장 기능을 사용하려면 먼저 진짜 배열로 변환해야 한다.
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}
sumVariadic(1, 2, 3); // 에러 TS2554
// sumVariadic이 인수를 받지 않도록 선언했으므로 이 함수를 호출하면 타입스크립트 입장에서는 인수를 받을 수 없다면서 TypeError를 발생시킨다.
// 나머지 매개변수(rest parameters)로 이 문제를 해결할 수 있다.
// 안전하지 않은 arguments를 사용하는 대신 나머지 매개변수를 이용해 sum 함수가 안전하게 임의의 인수를 받게 만든다.
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3); // 6으로 평가
//# sourceMappingURL=%EB%82%98%EB%A8%B8%EC%A7%80%20%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98.js.map