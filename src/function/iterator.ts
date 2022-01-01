export {};

// 반복자(iterator)와 제네레이터는 상생관계다. 제네레이터로 값의 스트림을 생성할 수 있고 반복자로 생성된 값을 소비할 수 있기 때문이다.
// 가령 createFibonacciGenerator 함수를 호출하면 Symbol.iterator 프로퍼티와 next 메서드를 모두 정의한 값을 얻게 된다.
// 즉, 이터러블과 반복자 두 가지가 결합된 제네레이터가 반환된다.

// Symbol.iterator와 next를 구현하는 객체(또는 클래스)를 만들어 반복자나 이터러블을 직접 정의할 수 있다.
// 다음은 1부터 10까지의 숫자를 반복하는 반복자를 정의하는 예다.

let numbers = { // let numbers: {[Symbol.iterator](): Generator<number, void, unknown>}
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

// for-for로 반복자 반복하기
for (let a of numbers) {
    // 1, 2, 3
}

// 반복자 스프레드
let allNumbers = [...numbers] // number[]

// 반복자 구조 분해 할당(destructure)
let [one, two, ...rest] = numbers // [number, number, number[]]

// TSC 플래그: downlevelIteration
// 타입스크립트를 ES2015 이전 버전의 자바스크립트로 컴파일할 땐느 tsconfig.json에서 downlevelIteation 플래그로 커스텀 반복자를 활성화할 수 있다.
// 응용 프로그램의 번들 크기가 커지는 것을 원하지 않으면 downlevelIteration을 비활성화하는 것이 좋다.
// 예전 환경에서 커스텀 반복자를 지원하려면 많은 코드가 필요하기 떄문이다.
// 예를 들어 이전 numbers예제는 1 KB의 코드를 생성한다(gzipped 상태 기준).