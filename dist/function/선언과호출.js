"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// 함수의 반환 타입은 TS가 자동으로 추론하지만 원한다면 명시할 수 도 있다.
function add1(a, b) {
    return a + b;
}
// 실무에서는 타입스크립트가 반환 타입을 추론하도록 하는게 보통이다. 타입스크립트가 해줅수 있는 일을 개발자가 직접 할 필요가 없다.
// 이름을 붙인 함수
function greet(name) {
    return 'hello ' + name;
}
// 함수 표현식
let greet2 = function (name) {
    return 'hello ' + name;
};
// 화살표 함수 표현식
let greet3 = (name) => {
    return 'hello ' + name;
};
//단축형 화살표 함수 표현식
let greet4 = (name) => 'hello ' + name;
// 함수 생성자
let greet5 = new Function('name', 'return "hello " + name');
// 타입 스크립트 함수 생성자를 제외한 모든 문법을 안전하게 지원하며,
// 이 모든 문법은 보통 매개변수 타입의 필수 어노테이션, 반환타입의 선택형 어노테이션에 적용하는 것과 같은 규칙을 따른다.
// 매개변수는 함수 선언의 일부이며 실행하는 데 필요한 데이터 조각이다. 정형 매개변수(formal parameter)라고도 부른다.
// 인수(argument)는 함수를 호출할 때 전달해야 하는 데이터 조각이다. 실질 매개변수(actual parameter)라고도 부른다.
// 타입스크립트에서 함수를 호출할 때 타입 정보는 따로 제공할 필요가 없으며,
// 바로 인수를 전달하면 타입스크립트가 함수의 매개변수와 인수의 타입이 호환되는지 확인한다.
add(1, 2); // 3으로 평가
greet('Crystal'); // 'hello Crytsta'로 평가
// 인수를 전달하지 않거나 잘못된 타입의 인수를 전달하면 타입스크립트가 에러를 발생시킨다.
add(1); // 에러 TS2554: 2개의 인수가 필요한데 1개만 전됨
add(1, 'a'); // 에러 TS2345: 'a' 인수 타입은 'number' 매개변수 타입에 할당할 수 없음
//# sourceMappingURL=%EC%84%A0%EC%96%B8%EA%B3%BC%ED%98%B8%EC%B6%9C.js.map