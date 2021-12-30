export = {};

// enum은 해당 타입으로 사용할 수 있는 값을 열거하는 기법이다.
// 열거형은 키를 값에 할당하는, 순서가 없는 자료구조다.
// 키가 컴파일 타임에 고정된 객체라고 생각하면 쉽다.
// 따라서 타입스크립트는 키에 접근할 때 주어진 키가 실제로 존재하는지 확인할 수 있다.

// 열거형의 이름은 단수 명사로 쓰고, 첫 문자는 대문자로 하는 것이 관례다.
// 키도 앞 글자를 대문자로 표시한다.
enum Language {
    English,
    Spanish,
    Russian
}

// TS는 열거형의 값을 추론하지만 직접 할당할 수 도 있다.
enum Language1 {
    English=0,
    Spanish=1,
    Russian=2
}

// 열거형을 여러 개로 나눠 정의한 다음 타입스크립트가 이들을  합치도록 할 수 있다.
// 타입스크립트는 여러 열거형 정의 중 한 가지 값만 추론할 수 있으므로 열거형을 분할할 때 주의해야 하며,
// 다음 예처럼 열거형 멤버에 명시적으로 값을 할당하는 습관을 기르는 것이 좋다.

enum Language2 {
    English=0,
    Spanish=1
}

enum Language3 {
    Russian = 2
}

// 계산된 값을 사용할 수도 있으므로 모든 값을 정의할 필요는 없다.(빠진 값은 타입스크립트가 추론한다.
enum Language4 {
    English = 100,
    Spanish = 200 + 300,
    Russian // 타입스크립트가 500 다음 숫자인 501로 추론
}

// 열거형에 문자열 ㅇ값을 사용하거나 문자열과 숫자 값을 혼합할 수 있다.

enum Color {
    Red = '#c10000',
    Blue = '#008ac1',
    Pink = 0xc10050, // 16진수 리터럴
    white = 255 // 10진수 리터럴
}

let red = Color.Red // Color
let pink = Color.Pink // Color

// 타입스크립트에서는 값이 나키로 열거형에 접근할 수 있도록 허용하지만 이는 불안정한 결과를 초래하기 쉽다.
let a = Color.Red // Color
let b = Color.Green // 에러 TS2339: 'Green' 프로퍼티는 'typeof Color'타입에 존재하지 않음

let c = Color[255] // string
let d = Color[6] // string(!!!)

// Color[6]은 접근할 수 없어야 하지만 타입스크립트는 접근을 허용한다.
// 더 안전한 열거형 타입인 const enum을 이용하면 타입스크립트가 이런 안전하지 않은 작업을 막도록 만들 수 있다. 앞의 예를 더 안전하게 정의해보자.

const enum LanguageA {
    English,
    Spanish,
    Russian
}

// 유효한 enum 키 접근
let aaa = LanguageA.English // Language

// 유효하지 않은 키 접근
let b = LanguageA.Tagalog // 에러 TS2339: 'Tagalog' 프로퍼티는 'typeof Language' 타입에 존재하지 않음

// 유효한 enum 키 접근
let c = LanguageA[0] // 에러 TS2476: const enum 멤버는 문자열 리터럴로만 접근할 수 있음

// 유효하지 않은 enum 키 접근
let d = LanguageA[6] // 에러 TS2476: const enum 멤버는 문자열 리터럴로만 접근할 수 있음

// const enum은 역방향 찾기를 지원하지 않으므로 열거형의 동작은 일반 자바스크립트 객체와 비슷해진다.
// 또한 const enum은 기본적으로 아무 자바스크립트도 생성하지 않으며 그 대신 필요한 곳에 열거형 메ㅐㅁ버의 값을 채워 넣는다.
// (예를 들어 타입스크립트는 Language.Spanish가 사용된 모든 코드를 값 1로 바꾼다.)

// TSC 플래그: preserveConstEnums
// 누군가의 타입스크립트 코드에 정의된 const enum을 가져왔을 때는 이 채워 넣기 기능이 문제를 일으킬 수 있다.
// 개발자가 타입스크립트 코드를 컴파일한 이후에 열거형을 만든 사람이 자신의 const enum을 갱신하면 런타임에 같은 열거형이 버전에 따라 다른값을 갖게 되고,
// 타입스크립트가 이상황에서 할수 있는 일은 없다.
// const enum을 사용할 때는 채워넣기 기능을 되도록 피해야 하며 여러분이 제어할 수 있는 타입스크립트 프로그램에서만 사용해야 한다.
// NPM으로 배포하거나 라이브러리로 제공할 프로그램에서는 const enum을 사용하지 말아야 한다.
// const enum의 런타임 코드 생성을 활성화 하려면 tsconfig.json 파일에서 poreserveConstEnums TSC 설정을 true로 바꾼다.
// {
//  "compileOption": {
//      "preserveConstEnums": true
//  }
//}

const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
}

function flip(f: Flippable) {
    return 'flipped it'
}

flip(Flippable.Chair) // 'flipped it'
flip(Flippable.Cup) // 'flipped it'
flip(12) // 'flipped it' (!!!)

// Chair와 Cups가 예상대로 동작하고 괜찮아 보이지만 곧 모든 숫자를 열거형에 할당할 수 있음을 알게 된다!
// 타입스크립트의 할당 규칙 때문에 생긴 운 나쁜 결과로,
// 이 문제는 문자열 값을 갖는 열거형을 사용해 해결할 수 있다.

const enum FliuppableA {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}

function flipA(f: FliuppableA) {
    return 'flipped it'
}

flipA(FliuppableA.Chair) // 'flipped it'
flipA(FliuppableA.Cup) // 'flipped it'
flipA(12) // 에러 TS2345: '12' 인수 타입은 'Flippable' 매개변수 타입에 할당할 수 없음
flipA('Hat') // 에러 TS2345: '"Hat"' 인수 타입은 'Flippable' 매개변수 타입에 할당할 수 없음

// 열거형을 안전하게 사용하는 방법은 까다로우므로 열거형 자체를 멀리 할 것을 권한다.
// 타입스크립트에는 열거형을 대체할 수단이 많다.
// 그래도 열거형 사용을 주장하는 동료 개발자의 마움을 바꾸기 어렵다면 동료 개발자가 자리를 비웠을 때 숫자 값이나
// const enum이 아닌 상황이거나 숫자 값을 받는 열거형임을 경고하도록 닌자처럼 재빨리 TSLint 규칙을 머지하자.

// 타입스크립트는 다양한 내장 타입을 제공한다. 타입스크립트가 값의 타입을 추론하도록 하거나 값의 타입을 명시할 수 있다.
// let과 var를 사용하면 일반적인 타입으로 추론하는 반면, const를 이용하면 더 구체적인 타입을 추론하게 만든다.
// 대부분의 타입은 일반 타입과 구체적 타입 두 가지를 제공하며, 구체적 타입은 보통 일반 타입의 서브타입입다.
