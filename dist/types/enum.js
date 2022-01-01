"use strict";
// enum은 해당 타입으로 사용할 수 있는 값을 열거하는 기법이다.
// 열거형은 키를 값에 할당하는, 순서가 없는 자료구조다.
// 키가 컴파일 타임에 고정된 객체라고 생각하면 쉽다.
// 따라서 타입스크립트는 키에 접근할 때 주어진 키가 실제로 존재하는지 확인할 수 있다.
// 열거형의 이름은 단수 명사로 쓰고, 첫 문자는 대문자로 하는 것이 관례다.
// 키도 앞 글자를 대문자로 표시한다.
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
// TS는 열거형의 값을 추론하지만 직접 할당할 수 도 있다.
var Language1;
(function (Language1) {
    Language1[Language1["English"] = 0] = "English";
    Language1[Language1["Spanish"] = 1] = "Spanish";
    Language1[Language1["Russian"] = 2] = "Russian";
})(Language1 || (Language1 = {}));
// 열거형을 여러 개로 나눠 정의한 다음 타입스크립트가 이들을  합치도록 할 수 있다.
// 타입스크립트는 여러 열거형 정의 중 한 가지 값만 추론할 수 있으므로 열거형을 분할할 때 주의해야 하며,
// 다음 예처럼 열거형 멤버에 명시적으로 값을 할당하는 습관을 기르는 것이 좋다.
var Language2;
(function (Language2) {
    Language2[Language2["English"] = 0] = "English";
    Language2[Language2["Spanish"] = 1] = "Spanish";
})(Language2 || (Language2 = {}));
var Language3;
(function (Language3) {
    Language3[Language3["Russian"] = 2] = "Russian";
})(Language3 || (Language3 = {}));
// 계산된 값을 사용할 수도 있으므로 모든 값을 정의할 필요는 없다.(빠진 값은 타입스크립트가 추론한다.
var Language4;
(function (Language4) {
    Language4[Language4["English"] = 100] = "English";
    Language4[Language4["Spanish"] = 500] = "Spanish";
    Language4[Language4["Russian"] = 501] = "Russian"; // 타입스크립트가 500 다음 숫자인 501로 추론
})(Language4 || (Language4 = {}));
// 열거형에 문자열 ㅇ값을 사용하거나 문자열과 숫자 값을 혼합할 수 있다.
var Color;
(function (Color) {
    Color["Red"] = "#c10000";
    Color["Blue"] = "#008ac1";
    Color[Color["Pink"] = 12648528] = "Pink";
    Color[Color["white"] = 255] = "white"; // 10진수 리터럴
})(Color || (Color = {}));
let red = Color.Red; // Color
let pink = Color.Pink; // Color
// 타입스크립트에서는 값이 나키로 열거형에 접근할 수 있도록 허용하지만 이는 불안정한 결과를 초래하기 쉽다.
let a = Color.Red; // Color
let b = Color.Green; // 에러 TS2339: 'Green' 프로퍼티는 'typeof Color'타입에 존재하지 않음
let c = Color[255]; // string
let d = Color[6]; // string(!!!)
// 유효한 enum 키 접근
let aaa = 0 /* English */; // Language
// 유효하지 않은 키 접근
let b = LanguageA.Tagalog; // 에러 TS2339: 'Tagalog' 프로퍼티는 'typeof Language' 타입에 존재하지 않음
// 유효한 enum 키 접근
let c = LanguageA[0]; // 에러 TS2476: const enum 멤버는 문자열 리터럴로만 접근할 수 있음
// 유효하지 않은 enum 키 접근
let d = LanguageA[6]; // 에러 TS2476: const enum 멤버는 문자열 리터럴로만 접근할 수 있음
function flip(f) {
    return 'flipped it';
}
flip(1 /* Chair */); // 'flipped it'
flip(2 /* Cup */); // 'flipped it'
flip(12); // 'flipped it' (!!!)
function flipA(f) {
    return 'flipped it';
}
flipA("Chair" /* Chair */); // 'flipped it'
flipA("Cup" /* Cup */); // 'flipped it'
flipA(12); // 에러 TS2345: '12' 인수 타입은 'Flippable' 매개변수 타입에 할당할 수 없음
flipA('Hat'); // 에러 TS2345: '"Hat"' 인수 타입은 'Flippable' 매개변수 타입에 할당할 수 없음
module.exports = {};
// 열거형을 안전하게 사용하는 방법은 까다로우므로 열거형 자체를 멀리 할 것을 권한다.
// 타입스크립트에는 열거형을 대체할 수단이 많다.
// 그래도 열거형 사용을 주장하는 동료 개발자의 마움을 바꾸기 어렵다면 동료 개발자가 자리를 비웠을 때 숫자 값이나
// const enum이 아닌 상황이거나 숫자 값을 받는 열거형임을 경고하도록 닌자처럼 재빨리 TSLint 규칙을 머지하자.
// 타입스크립트는 다양한 내장 타입을 제공한다. 타입스크립트가 값의 타입을 추론하도록 하거나 값의 타입을 명시할 수 있다.
// let과 var를 사용하면 일반적인 타입으로 추론하는 반면, const를 이용하면 더 구체적인 타입을 추론하게 만든다.
// 대부분의 타입은 일반 타입과 구체적 타입 두 가지를 제공하며, 구체적 타입은 보통 일반 타입의 서브타입입다.
//# sourceMappingURL=enum.js.map