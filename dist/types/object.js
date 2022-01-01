"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object는 any 보다 조금 더 좋은 타입이다.
// object는 서술하는 값에 관한 정보를 거의 알려주지 않으며, 값 자체가 자바스크립트 객체라고(그리고 null이 아니라고) 말해줄뿐이다.
let a = {
    b: 'x'
};
a.b; // 에러 TS2339: 'b'프로퍼티는 'object'에 존재하지 않음
let b = {
    b: 'x'
}; // {b: string}
b.b; // string
let c = {
    c: {
        d: 'f'
    }
}; // {c: {d: string}}
let d = {
    b: 12
}; // {b: number}
const e = {
    b: 12
}; // {b: number}
// 객체 리터럴 문법은 "이런 형태의 물건이 있어"라고 말한다.
// 이 물건은 객체 리터럴 또는 클래스일 수 있다.
let f = {
    firstName: 'john',
    lastName: 'barrowman'
};
class Person {
    constructor(firstName, // public 은 this.firstName = firstaName을 단축한 것
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
f = new Person('matt', 'smith'); // OK 객체에 클래스로 생성자로 생성하여 넣어도된다.
// 프로퍼티를 추가하거나 필요한 프로퍼티를 제공하지 않으면 어떤 일이 일어나는지 확인해보자.
let aa;
aa = {}; // TS2741: '{}' 타입에는 '{b: number}' 타입에 필요한 'b' 프로퍼티가 없음
aa = {
    b: 1,
    c: 2 // 에러 TS2322: '{b: number; c: number}' 타입을 '{b: number}' 타입에 할당할 수 없음
    // 객체 리터럴은 알려진 프로퍼티만 지정할 수 있는데 'c'는 '{b: number}' 타입에 존재하지 않음
};
// 확실한 할당 (definite assignment)
// 변수를 선언하고 나중에 초기화하는 상황에서 타입스크립트는 변수를 사용하기 전에 값을 할당하도록 강제한다.
let i;
let j = i * 3; // TS2454: 할당하기 전에 변수 'i'를 사용함
// 타입스크립트는 타입을 명시하지 않아도 이 규칙을 잘 적용한다.
let ii;
let jj = ii * 3; // 에러 TS2532: 'undefined' 객체
// 타입스크립트는 객체 프로퍼티에 엄격한 편이다.
// 예를들어 객체에 number 타입의 b라는 프로퍼티가 있어야 한다고 정의하면 타입스크립트는 오직 b만 기대한다.
// b가 없거나 다른 추가 프로퍼티가 있으면 에러를 발생시킨다.
// 그럼 어떤 프로퍼티는 선택형이고 예정에 없던 프로퍼티가 추가될 수 있다고 타입스크립트에 알려줄 수 있을까?
let aaa;
aaa = { b: 1 };
aaa = { b: 1, c: undefined };
aaa = { b: 1, c: 'd' };
aaa = { b: 1, 10: true };
aaa = { b: 1, 10: true, 20: false };
aaa = { 10: true }; // 에러 TS2741: '{10: true}' 타입에는 'b' 프로퍼티가 없음
aaa = { b: 1, 33: 'red' }; // 에러 TS2741: 'string' 타입은 'boolean' 타입에 할당할 수 없음
// 인덱스 시그니처(index signature)
//[key: T]: U 같은 문법을 인덱스 시그니처라 부르며 타입스크립트에 어떤 객체가 여러 키를 가질수 있음을 알려준다.
// "이 객체에서 모든 T 타입의 키는 U타입의 값을 갖는다"라고 해석할 수 있다.
// 인덱스 시그니처를 이용하면 명시적으로 정의한 키 외에 다양한 키를 객체에 안전하게 추가할 수 있다.
// 인덱스 시그니처에서 기억해야 할 규칙이 하나 있다.
// 인덱스 시그니처의 키(T)는 반드시 number나 string 타입에 할당할 수 있는 타입이어야 한다.
// 인덱스 시그니처의 키 이름은 원하는 이름을 가져다 바꿔도 된다. 즉, key가 아니여도 된다.
let airplaneSeatingAssignments = {
    '34D': 'Boris Cherry',
    '34E': 'Bill Gates'
};
// 객체 타입을 정의할 때 선택형(?)만 사용할 수 있는 것은 아니다.
// 필요하면 readonly 한정자를 이용해 특정 필드를 읽기 전용으로 정의할 수 있다.
// (즉, 정의한 필드에 초깃값을 할당한 다음에는 그 값을 바꿀 수 없다. 객체 프로퍼티에 const를 적용한 듯한 효과를 낸다).
let user = {
    firstName: 'abby'
};
user.firstName; // string
user.firstName = 'abbey with an e'; // 에러 TS2540: 'firstName'은 읽기 전용 프로퍼티 이므로 할당할 수 없음
// 객체 리터럴 표기법에는 빈 객체 타입({})이라는 특별한 상황이 존재한다.
// null과 undefined를 제외한 모든 타입은 빈 객체 타입에 할당할 수 있으나, 이는 사용하기 까다롭게 만든다.
// 따라서 가능한 빈 객체는 피하는 것이 좋다.
let danger; // 타입은 {}로 정의 했지만 다른 타입의 값도 할당이 가능하다.
danger = {};
danger = { x: 1 };
danger = [];
danger = 2;
// 타입스크립트에서 객체를 정의하는 방법은 다음처럼 네 가지로 요약할 수 있다.
// 1. 객체 리터럴 또는 형태라 불리는 표기법({a: string}). 객체가 어떤 필드를 포함할 수 있는지 알고 있거나 객체의 모든 값이 같은 타입을 가질 때 사용한다.
// 2. 빈 객체 리터럴 표기법({}). 이 방법은 사용하지 않는 것이 좋다.
// 3. object 타입. 어떤 필드를 가지고 있는지는 관심 없고, 그저 객체가 필요할때 사용한다.
// 4. Objet 타입. 사용하지 않는 것이 좋다.
// ['값', {}, object, Object],
// [{},             ⭕️, ⭕️, ⭕️],
// [['a'],          ⭕️, ⭕️, ⭕️],
// [function(){},   ⭕️, ⭕️, ⭕️],
// [new String('a'),⭕, ⭕️, ⭕️],
// ['a',            ⭕️, ❌, ⭕️],
// [1,              ⭕️, ❌, ⭕️],
// [Symbol('a'),    ⭕️, ❌, ⭕️],
// [null,           ❌, ❌, ❌],
// [undefined,      ❌, ❌, ❌]
//# sourceMappingURL=object.js.map