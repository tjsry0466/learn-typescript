export {};

// 타입을 미리 알 수 없는 어떤 값이 있을때 any 대신 unknown을 사용하자.
// unknown의 타입을 검사해 정제(refine)하기 전까지는 타ㅣㅂ스크립트가 unknown 타입의 값을 사용할 수 없게 강제한다.
// unknownd은 비교연산 ( ==, ===, ||, &&, ?)과 반전(!)을 지원하고,
// 자바스크립트의 typeof, intanceof 연산자로 정제할 수 있다.

let a: unknown = 30
let b = a === 123
// let c = a + 10 // 에러 TS2571: 객체 타입이 'unknown'임
if (typeof a === 'number'){
    let d = a + 10;
}