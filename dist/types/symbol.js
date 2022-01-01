"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// symbol은 es2015에 새로 추가된 기능이다.
// 실무에서는 심벌을 자주 사용하지 않는 편이며 객체와 맵에서 문자열 키를 대신하는 용도로 사용한다.
// 실벌키를 사용하면 사람들이 잘 알려진 키만 사용하도록 강제할 수 있으므로 키를 잘못 설정하는 실수를 방지한다.
let a = Symbol('a'); // symbol
let b = Symbol('b'); // symbol
var c = a === b; // boolean
let d = a + 'x'; // 에러 TS2469: '+' 연산을 'symbol' 타입에 적용할 수 없음
const e = Symbol('e'); // typeof e
const f = Symbol('f'); // typeof f
let g = Symbol('f'); // 에러 TS1332: 'unique symbol' 타입은 반드시 'const' 여야함
let h = e === e; //boolean
let i = e === f; // 에러 TS2367: 'unique symbol' 타입은 서로 겹치는 일이 없으므로 이 비교문의 결과는 항상 'false'
//# sourceMappingURL=symbol.js.map