"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 자바스크립트를 사용해보지 ㅇ낳은 독자라면 자바스크립트에서 this 변수가 클래스에 속한 메서드들뿐 아니라 모든 함수에서 정의된다는 사실에 놀랄 것이다.
// this 의 값은 함수를 어떻게 호출했는지에 따라 달라지는데 이는 자바스크립트 코드를 이해하기 어렵게 만드는 고질적인 문제 중 하나다.
// 따라서 많은 개발팀은 클래스 메서드를 제외한 다른 모든 곳에서 this 사용을 금한다.
// TSLint 규칙에서 no-invalid-this를 활성화하면 여러분 코드에 이런 this가 침투하는 것을 막을 수 있다.
// this 가 자주 문제를 일으키는 원인은 바로 그 할당 방법에 있다.
// 메서드를 호출할 때 this는 점 왼쪽의 값을 갖는다는 것이 일반적인 원칙이다. 다음 예를 살펴보자
let x = {
    a() {
        return this;
    }
};
x.a(); // a()의 바디 안에서 this는 객체 x임
// 하지만 호출이 일어나기 전 어느 시점에서 a를 다시 할당하면 결과가 달라진다!
let a = x.a;
a(); // 이제 a()의 바디 안에서 this는 정의되지 않은 상태임
// 다음처럼 날짜의 타입을 포매팅하는 유틸리티 함수가 있다고 가정하자.
function fancyDate() {
    return `${this.getDate()} /${this.getMonth()}/${this.getFullYear()}`;
}
fancyDate(new Date); // "4/14/2005"로 평가
// 깜빡하고 Date를 한정하지 않으면 런타임예외가 발생한다
fancyDate(); // 처리되지 않은 TypeError: this.getDate는 함수가 아님
// this의 동작은 예상과 크게 다를 수 있다는 점만 짚고 넘어가자(어떻게 선언하느냐가 아니라 함수를 어떻게 호출하느냐에 영향을 받는다)
// 다행히 타입스크립트가 이 문제를 잘 처리해준다.
// 여러분의 함수에서 this를 사용할 때는 항상 여러분이 기대하는 this 타입을 함수의 첫 번째 매개변수로 선언하자.
// 그러면 함수 안에 등장하는 모든 this가 여러분이 의도한 this가 됨을 타입스크립트가 보장해준다.
// 함수 시그니처에 사용한 this는 예약어이므로 다른 매개변수와 완전히 다른 방식으로 처리된다.
function fancyDate1() {
    return `${this.getDate()} /${this.getMonth()}/${this.getFullYear()}`;
}
fancyDate1.call(new Date); // "6/13/2008"으로 평가함
fancyDate1(); // 에러 TS2684: void 타입의 'this'를 메서드에 속한 'Date' 타입의 'this'에 할당할 수 없음
// 타입스크립트에 많은 정보를 제공한 덕분에 런타임 에러 대신 컴파일 타임에 경고를 시작했다.
// TSC 플래그: nolmplicitThis
// tsconfig.json에서 noImplicitThis를 활성화하면 함수에서 항상 this 타입을 명시적으로 설정하도록 강제할 수있다.
// 단, noImplicitThis는 클래스와 객체의 함수에는 this를 지정하라고 강제하지 않는다.
//# sourceMappingURL=this%EC%9D%98%20%ED%83%80%EC%9E%85.js.map