"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number 타입은 모든 숫자(정수, 소수, 양수, 음수, Infinity, NaN 등)의 집합이다.
// number 타입에는 덧셈(+), 뺄셈(-), 모듈로(%), 비교(<) 등의 숫자 관련 연산을 수행할 수 있다.
let a = 1234; // number
var b = Infinity * 0.10; // number
const c = 5678; // 5678
let d = a < b; // boolean
let e = 100; // number
let f = 26.218; // 26.218
// let g: 26.218 = 10 // 에러 TS2322: '10' 타입을 '26.218 타입에 할당할 수 없음
// 긴 숫자를 처리할 때는 숫자 분리자를 이용해 숫자를 읽기 쉽게 만들 수 있다.
// 숫자 분리자는 타입고 값 모두에 사용할 수 있다.
let oneMillion = 1000000; // 1000000과 같음
let twoMillion = 2000000;
//# sourceMappingURL=number.js.map