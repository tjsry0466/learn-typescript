export {};

// bigint 타입은 모든 BigInt의 집합으로 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 비교(<) 등의 연산을 지원한다.
// es2020 이상 버전을 쓰지 않으면 에러를 뱉는다.
let a = 1234n // bigint
const b = 5678n // 5678n
var c = a + b // bigint
let d = a < 1235 // boolean
let e = 88.5n // 에러 TS1353: bigint 리터럴은 반드시 정수여야 함
let f: bigint = 100n // bigint
let g: 100n = 100n // 100n
let h: bigint = 100 // 에러 TS2322: '100' 타입은 'bigint' 타입에 할당할 수 없음