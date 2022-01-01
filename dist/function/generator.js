"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 여러 개의 값을 생성하는 편리한 기능을 제공한다.
// 제네레이터 함수를 이용하면 값을 생산하는 속도도 정교하게 조절할 수 있다.
// 제네레이터 함수는 게으르게 동작한다.
// (즉, 소비자가 요청해야만 다음 값을 계산)하기 때문에 무한의 목록 생성하기 같은 까다로운 기능을 제공할 수 있다.
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
fibonacciGenerator.next(); // {value: 0, done: false}로 평가
fibonacciGenerator.next(); // {value: 1, done: false}로 평가
fibonacciGenerator.next(); // {value: 1, done: false}로 평가
fibonacciGenerator.next(); // {value: 2, done: false}로 평가
fibonacciGenerator.next(); // {value: 3, done: false}로 평가
fibonacciGenerator.next(); // {value: 5, done: false}로 평가
//# sourceMappingURL=generator.js.map