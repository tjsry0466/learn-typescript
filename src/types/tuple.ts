export = {};

// 튜플은 배열의 서브타입이다.
// 튜플은 길이가 고정되었고, 각 인덱스의 타입이 알려진 배열의 일종이다.
// 다른 타입과 달리 튜플은 선언할 때 타입을 명시해야 한다.
// 자바스크립트에서 배열과 튜플에 같은 문법(대괄호)을 사용하는데 타입스크립트에서는 대괄호를 타입으로 추론하기 때문이다.

let a: [number] = [1]

// [이름, 성씨, 생년] 튜플
let b: [string, string, number] = ['malcolm', 'gladwell', 1963]

b = ['queen', 'elizabeth', 'ii', 1926] // 에러 TS2322: 'string'은 'number' 타입에 할당할 수 없음

// 튜플은 선택형 요소도 지원한다. 객체 타입에서와 마찬가지로 ?는 '선택형'을 뜻한다.

// 방향에 따라 다른 값으 ㄹ갖는 기차 요금 배열
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]

// 다음과 같음
let moreTrainFares: ([number] | [number, number][]) = [
    // ...
]

// 또한 튜플이 최소 길이를 갖도록 지정할 때는 나머지 요소(...)를 사용할 수 있다.

// 최소 한 개의 요소를 갖는 string 배열
let firends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
//이형 배열
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

// 튜플은 이형(heterogeneous) 배열을 안전하게 관리할 뿐 아니라 배열 타입의 길이도 저잘한다.
// 이런 기능을 잘 활용하면 순수 배열에 비해 안전성을 높일수 있으므로 튜플 사용을 권장한다.

// 읽기 전용 배열과 튜플
// 일반 배열은 가변(mutable; 즉, .push, .splice, 갱신 등의 작업을 자유롭게 수행할 수 있는)인 반면, 상황에 따라서는 불변인 배열이 필요할 수 있다.

// 타입스크립트는 readonly 배열 타입을 기본으로 지원하므로 이를 이용해 불변 배열을 바로 만들 수 있다.
// 읽기 전용 배열은 일반 배열과 같지만 내용을 갱신할 수 없다는 점만 다르다.
// 읽기 전용 배열은 명시적 타입 어노테이션으로 만들 수 있다.
// 읽기 전용 배열을 갱신하려면 .push, .slice처럼 내용을 바꾸는 동작 대신 concat, .slice 같이 내용을 바꾸지 않는 메서드를 사용해야 한다.

let as: readonly number[] = [1, 2, 3] // readonly number[]
let bs: readonly number[] = as.concat(4) // readonly number[]
let three = bs[2] // number
as[4] = 5 // 에러 TS2542: 'reaonly number[]'의 인덱스 시그니처 타입은 읽기만 허용함
as.push(6) // 에러 TS2339: 'push' 프로퍼티는 'readonly number[]' 타입에 존재하지 않음

// 타입스크립트는 Array처럼 읽기 전용 배열과 튜플을 만드는 긴 형태의 선언 방법을 지원한다.

type A = readonly string[] // readonly string[]
type B = ReadonlyArray<string> // readonly string[]
type C = Readonly<String[]> // readonly string[]

type D = readonly [number, string] // readonly [number, string]
type E = Readonly<[number, string]> // readonly [number, string]

// 간단한 readonly 접근자, 조금 더 긴 Readonly와 ReadonlyArray 유틸리티 중) 어떤 문법을 사용할지는 개발자의 기호에 달려있다.

// 읽기 전용 배열은 바꿀 수 없으므로 코드를 쉽게 이해할 수 있는 장점이 있지만 결국 자바스크립트 배열로 구현한 것이다.
// 즉, 스프레드(...)나 .slice 등으로 배열을 조금만 바궈도 우선 원래 배열을 복사해야 하므로, 주의하지 않으면 응용 프로그램의 성능이 느려질 수 있다.
// 작은 배열에서는 이런 오버헤드가 사소해 보일 수 있지만 큰 배열에서는 눈에 띄게 큰 성능 저하를 일으킬 수 있다.

// 불변 배열을 자주 사용해야 하는 상황이라면 리 바이론의 immutable 같은 효율적인 라이브러리를 고려하는 것이 좋다.