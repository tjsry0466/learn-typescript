export = {};

// 타입 별칭
// (let, const, var로) 변수를 선언해서 값 대신 변수로 칭하듯이 타입 별칭으로 타입을 가리킬 수 있다.
type Age = number
type Person = {
    name: string,
    age: Age
}

// Age는 number다. 타입 별칭을 이용하면 Person의 형태를 조금 더 이해하기 쉽게 정의할 수 있다.
// 타입스크립트는 별칭을 추론하지는 않으므로 반드시 별칭의 타입을 명시적으로 정의해야 한다.

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
}

// Age는 number의 별칭이므로 number에도 할당할 수 있다. 따라서 코드를 다음처럼 바꿀 수 있다.

let age1 = 55
let driver1: Person = {
    name: 'James May',
    age: age
}

// 타입 별칭은 프로그램의 논리에 영향을 미치지 않고 별칭이 가리키는 타입으로 대치할 수 있다.
// 자바스크립트 변수 선언(let, const, var)과 마찬가지로 하나의 타입을 두 번 정의할 수는 없다.

type Color = 'red'
type Color = 'blue' // 에러 TS2300: 'Color' 식별자를 중복 정의함

// let과 const 처럼 타입 별칭도 블록 영역에 적용된다.
// 모든 블록과 함수는 자신만의 영역을 가지므로 내부에 정의한 타입 별칭이 외부의 정의를 덮어쓴다.(shadowing)

type Color1 = 'red'
let x = Math.random() < .5
if (x) {
    type Color = 'blue' // 위의 Color 정의를 덮어씀
    let b: Color = 'blue'
} else {
    let c: Color = 'red';
}

// 타입 별칭은 복잡한 타입을 DRY(반복하지말라. Don't Repeat Yourself)하지 않도록 햊며 변수가 어떤 목적으로 사용되었는지 쉽게 이해할 수 있게 도와준다.
// (어떤 사람들은 변수명ㅇ으로 설명하는 것보다 타입명으로 설명하는 것을 선호한다)
// 값을 변수로 할당할지를 결정하는 것과 같은 기준으로 타입 별칭을 사용할지 여부를 결정할 수 있다.

// 유니온과 인터섹션 타입
// A, B라는 두 사물이 있을 때 이를
// 유니온(union; 합집합)하면 둘으 합친(A나 B에 해당하는 것 전부) 결과가 나오며
// 인터섹션(intersection; 교집합)하면 둘의 공통부분(A, B 모두에 속하는 것)이 결과로 나온다.

// 타입스크립트는 타입에 적용할 수 있는 특별한 연산자인 유니온(|)과 인터섹션(&)을 제공한다.
// 타입은 집합과 비슷하므로 집합처럼 연산을 수행할 수 있다.
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let s: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

// Dog
s = {
    name: 'Domino',
    barks: true,
    wags: true
}

// 둘 다
s = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

// 유니온 타입(|)에 사용된 값이 꼭 유니온을 구성하는 타입 중 하나일 필요는 없으며 양쪽 모두에 속할 수 있다.
// CatAndDog는 만능 하이브리드 슈퍼 애완견묘는 name, purr, bark, wag 전부 할 수 있다.

let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}

// 실전에서는 대게 인터섹션보다 유니온을 자주 사용한다.

function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

// 이 함수에서는 string 또는 null을 반활할 수 있다.

type Returns = string | null

function f(a: string, b: number) {
    return a || b
}

// 조건이 참이면 string, 거짓이면 string을 반환한다. 즉, string | number을 반환한다.
// 마지막으로 배열에도 자연스럽게, 특히 이형(heterogeneous) 배열일 때 유니온이 종종 등장한다.


