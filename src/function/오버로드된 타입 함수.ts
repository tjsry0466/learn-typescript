export {};

// 문맥적 타입화 절에서 사용한 함수 타입 문법(type Fn = (...) => ...)은 단축형 호출 시그니처(shorhand call signature)다.
// 이 호출 시그니처를 더욱 명확하게 표헌할 수 있다. 다시 Log를 예로 살펴보자.

// 단축형 호출 시그니처
type Log = (message: string, userId?: string) => void

// 전체 호출 시그니처
type Log1 = {
    (message: string, userId?: string): void
}

// 두 코드는 문법만 조금 다를 뿐 모든 면에서 같다.

// Log 함수처럼 간단한 상황이라면 단축형을 주로활용하되 더 복잡한 함수라면 전체 시그니처를 사용하는 것이 좋을 때도 있다.
// 오버로드된 함수: 호출 시그니처가 여러 개인 함수

// 대부분의 프로그래밍 언어에서 여러 매개변수를 인수로 받아 어떤 타입의 값을 반환하는 함수를 선언한 다음,
// 이 함수가 요구하는 정확한 매개변수 집합을 건네 함수를 호출하면 항상 똑같은 타입의 반환값을 받게 된다.
// 자바스크립트는 예외다. 자바스크립트는 동적 언어이므로 어떤 함수를 호출하는 방법이 여러 가지다.
// 뿐만 아니라 인수 입력 타입에 따라 반환 타입이 달라질 때도 있다

// 타입스크립트는 이런 동적 특징을 오버로드된 함수 선언으로 제공하고, 입력 타입에 따라 달라지는 함수의 출력 타입은 정적 타입 시스템으로 각각 제공한다.
// 이런 언어 기능을 당연하게 여길 수도 있겠지만 사실 타입 시스템의 고급 기능에 속한다.

// 오버로드된 함수 시그니처를 이용하면 표현력 높은 API를 설계할 수 있다.
// 예를 들어 Reverse라는 휴가 예약 API를 설계한다고 하자.
// 먼저 타입을 다음처럼 지정할 수 있다(전체 타입 시그니처 사용)

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}

let reserve: Reverse = (from, to, destination) => {
    // ...
}

// 발리로 여행을 가려는 고객이 있다면 from과 to에는 날짜를, destination은 "Bali"로 설정해 reserve API를 이용할 것이다.
// 다음처럼 편도 여행을 지원하도록 API를 개선할 수도 있다.

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

// 이 코드를 실행하려 시도하면 타입스크립트가 Reserve를 구현한 코드에서 에러를 발생시킨다.

// 이 문제는 타입스크립트가 호출 시그니처 오버로딩을 처리하는 방식 때문에 발생한다.
// 함수 f에 여러 개의 오버로드 시그니처를 선언하면, 호출자 관점에서 f의 타입은 이들 오버로드 시그니처들의 유니온이 된다.
// 하지만 f를 구현하는 관점에서는 단일한 구현으로 조합된 타입을 나타낼 수 있어야 한다.
// 이 조합된 시그니처는 자동으로 추론되지 않으므로 f를 구혀할 때 직접 선언해야 한다.

let reverse: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    // ...
}

// 구현의 시그니처는 두 개의 오버로드 시그니처를 수동으로 결합한 결과와 같다
// (즉, Signature1 | Signature2를 손으로 계산).
// 결합된 시그니처는 reserve를 호출하는 함수에는 보이지 않는다.
// 즉, 다음은 소비자 관점의 Reserve 시그니처다.

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

// 결과적으로 이전에 정의한 결합된 시그니처를 모두 포함하지 않는다.

// 잘못됨!
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: date, destination: string): Reservation
    (from Date, toOrDestination: Date | string, destination?: string): Reservation
}

// 두 가지 방식으로 reserve를 호출할 수 있으므로 reserve를 구현할 때 타입스크립트에 reserve가 어떤 방식으로 호출되는지 확인시켜 주어야 한다.

let reserve: Reserve = {
    from: Date,
    toOrDestination: Date | string,
    destination?: string
} => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // 편도 여행 예약
    } else if (typeof toOrDestination === 'string') {
        // 왕복 여행 예약
    }
}

// 오버로드 시그니처는 구체적으로 유지하자
// 오버로드된 함수 타입을 선언할 때는 각 오버로드 시그니처(Reserve)를 구현의 시그니처(reserve)에 할당할 수 있어야 한다.
// 즉, 오버로드를 할당할 수 있는 범위에서 구현의 시그니처를 얼마든지 일반화 할 수 있다.

let reserve1: Reserve = (
    from: any,
    toOrDestination: any,
    destination?: any
) => {
    // ...
}

// 오버로드를 사용할 때는 함수를 쉽게 구현할 수 있도록 가능한 한 구현의 시그니처를 특정하는 것이 좋다.
function getMonth(date: Date): number {
    return date.getMonth()
}

// 오버로드는 자연스럽게 브라우저 DOM API에서 유용하게 활용된다.
// 새로운 HTML 요소를 만들 때 사용하는 createElement DOM API를 예로 살펴보자.
// 이 API는 HTML 태그에 해당하는 문자열을 받아 이 태그 타입의 새 HTML 요소를 반환한다.
// 타입스크립트는 각 HTML 요소를 내장 타입으로 지원한다.
// 다음은 타입스크립트가 지원하는 태그의 일부이다.
