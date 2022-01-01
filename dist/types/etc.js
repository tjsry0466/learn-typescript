"use strict";
// Age는 number다. 타입 별칭을 이용하면 Person의 형태를 조금 더 이해하기 쉽게 정의할 수 있다.
// 타입스크립트는 별칭을 추론하지는 않으므로 반드시 별칭의 타입을 명시적으로 정의해야 한다.
let age = 55;
let driver = {
    name: 'James May',
    age: age
};
// Age는 number의 별칭이므로 number에도 할당할 수 있다. 따라서 코드를 다음처럼 바꿀 수 있다.
let age1 = 55;
let driver1 = {
    name: 'James May',
    age: age
};
let x = Math.random() < .5;
if (x) {
    let b = 'blue';
}
else {
    let c = 'red';
}
// Cat
let s = {
    name: 'Bonkers',
    purrs: true
};
// Dog
s = {
    name: 'Domino',
    barks: true,
    wags: true
};
// 둘 다
s = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
};
// 유니온 타입(|)에 사용된 값이 꼭 유니온을 구성하는 타입 중 하나일 필요는 없으며 양쪽 모두에 속할 수 있다.
// CatAndDog는 만능 하이브리드 슈퍼 애완견묘는 name, purr, bark, wag 전부 할 수 있다.
let b = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};
// 실전에서는 대게 인터섹션보다 유니온을 자주 사용한다.
function trueOrNull(isTrue) {
    if (isTrue) {
        return 'true';
    }
    return null;
}
function f(a, b) {
    return a || b;
}
module.exports = {};
// 조건이 참이면 string, 거짓이면 string을 반환한다. 즉, string | number을 반환한다.
// 마지막으로 배열에도 자연스럽게, 특히 이형(heterogeneous) 배열일 때 유니온이 종종 등장한다.
//# sourceMappingURL=etc.js.map