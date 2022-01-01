export {};

// 함수의 전체 타입을 표현하는 방법을 알아보자.

function sum(a: number, b: number): number {
    return a+ b
}

// sum 함수를 다음과 같이 표현할 수 있다.
// (a: number, b: number) => number