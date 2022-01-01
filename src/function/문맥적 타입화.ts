export {};

// 함수에서 타입을 Log로 지정하면 타입스크립트가 message의 타ㅣㅂ을 string으로 추론할 수 있다.
// 이는 문맥적 타입화(contextual typing)라는 타입스크립트의 강력한 타입 추론 기능이다.

function times(
    f: (index: number) => void,
    n: number
){
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

// times 의 시그니처에서 f의 인수 index를 number로 선언했으므로 타입스크립트는 문맥상 n이 number임을 추론할 수 있다.
// f를 인라인으로 선언하지 않으면 타입스크립트는 타입을 추론할 수 없다.

function f(n) { // 에러 TS7006: 매개변수 'n'의 타입은 암묵적으로 'any' 타입이 됨
    console.log(n)
}

times(f, 4)