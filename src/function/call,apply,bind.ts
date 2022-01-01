export = {};

// 함수를 괄호 ()로 호출하는 방법도 있지만 자바스크립트에서는 두 가지 방법을 추가로 제공한다.

function add(a: number, b: number): number {
    return a + b
}

add(10, 20) // 30으로 평가
add.apply(null, [10, 20]) // 30으로 평가
add.call(null, 10, 20) // 30으로 평가
add.bind(null, 10, 20)() // 30으로 평가

// apply는 함수 안에서 값을 this로 한정(bind)하며(여기에서는 this를 null로 한정) 두번째 인수를 펼쳐 함수에 매개변수로 전달한다.
// call도 같은 기능을 수행하지만 인수를 펼쳐 전달하지 않고 순서대로 전달한다는 점만 다르다.

// 비슷한 방법으로 bind도 this 인수를 함수의 인수 목록으로 한정한다.
// 다른 점은 bind는 함수를 호출하지 않고 새로운 함수를 반환하는데,
// 개발자는 ()나 .call을 이용해 반환된 함수를 호출하거나, .apply로 아직 한정하지 않은 매개 변수를 추가로 전달할 수 있다.

// TSC 플래그: strictBindCallApply
// 코드에서 .call, .apply, .bind를 안전하게 사용하려면 tsconfig.json에서 strictBindCallApply를 활성화해야 한다
// (strict 모드를 이미 활성화했다면 이 옵션은 자동으로 활성화됨)
