export {};

// string은 모든 문자열의 집합으로 연결(+), 슬라이스(.slice)등의 연산을 수행할 수 있다.

let a = 'hello' // string
var b = 'billy' // string
const c = '!' // '!'
let d = a + ' ' + b + c // string
let e: string = 'zoom' // string
let f: 'john' = 'john' // john
let g: 'john' = 'zoe' // 에러 TS2322: "zoe" 타입을 "john" 타입에 할당할 수 없음