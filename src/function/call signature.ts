export {};

// 함수의 전체 타입을 표현하는 방법을 알아보자.

function sum(a: number, b: number): number {
    return a+ b
}

// sum 함수를 다음과 같이 표현할 수 있다.
// (a: number, b: number) => number
// 함수 호출 시그니처는 타입 수준 코드, 즉 값이 아닌 타입 정보만 포함한다.

// 독립 호출 시그니처를 추출해보자

// greet(name: string) 함수
type Greet = (name: string) => string

// log(message: string, userId?: string 함수
type Log = (message: string, userId?: string) => void

// sumVariadicSafe(...numbers: number[]): number 함수
type SumVariadicSafe = (...numbers: number[]) => number

// 호출 시그니처와 구현의 관계를 더 구체적으로 확인하자.
// 호출 시그니처가 주어졌을 때 어떻게 그 시그니처를 만족하는 함수를 구현할 수 있을까?
// 간단하게 호출 시그니처를 함수 표현식과 합칠 수 있다.

type Log1 = (message: string, userId?: string) => void

let log: Log1 = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

