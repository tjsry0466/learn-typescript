export = {};

// ts에서의 배열도 concat, push, search, slice 등을 지원하는 특별한 객체이다.

let a = [1, 2, 3] // number[]
var b = ['a', 'b'] // string[]
let c: string[] = ['a'] // string[]
let d = [1, 'a'] // (string | number)[]
const e = [2, 'b'] // (string | number)[]

let f = ['red']
f.push('blue')
f.push(true) // 에러 TS2345: 'true' 타입 인수를 'string' 타입 매개변수에 할당할 수 없음

let g = [] // any[]
g.push(1) // number[]
g.push('red') // (string | number)[]

let h: number[] = [] // number[]
h.push(1) // number[]
h.push('red') // 에러 TS2345: 'red' 타입 인수를 'number' 타입 매개변수에 할당할 수 없음

// 타입스크립트는 T[] 와 Array<T>라는 두 가지 배열 문법을 지원한다. 성능, 의미상 두 표현은 같다.
// 이 책에서는 더 간결한 T[] 문법을 사용하지만 여러분은 자신의 취향대로 원하는 문법을 사용하기 바란다.

// 이 예제를 살펴하면 c와 h를 제외한 모든 변수의 타입은 묵시적으로 정의한다.
// 또한 타입스크립트에는 배열에 무엇을 넣을 수 있고, 무엇은 넣을 수 없는지에 관한 규칙이 있음을 알 수 있다.

// 개개는 배열을 동형(homogeneous)으로 만든다.
// 즉, 한 배열에 사과, 오렌지, 숫자를 함께 저장하지 않고 배열의 모든 항목이 같은 타입을 갖도록 설계하려 노력한다.
// 그렇지 않으면 타입스크립트에 배열과 관련한 작어비 안전한지 증명해야 하므로 추가 작업을 해야한다.

// 예제의 f를 보면서 왜 동형 배열의 처리가 쉬운지 확인해보자.
// 배열을 문자열 'red'로 초기화했다(배열을 선언하고 문자열 타입의 값을 추가했을 때 타입스크립트는 이 배열이 문자열 값을 갖는 배열이라 추론한다.)
// 그리고 'blue'를 배열에 추가하는데 'blue'는 문자열이므로 타입스크립트는 아무 문제없이 명령을 실행한다.
// 그리고 다시 true를 추가하려 하면 에러가 발생한다.
// f는 문자열 배열인데 true는 문자열이 아니기 때문이다.

// 반명 d는 초기화하면서 number와 string을 저장했으므로 타입스크립트는 d의 타입을 number | string 으로 추론한다.
// 각 요소는 숫자와 문자열 중 한가지일 수 있으므로 요소를 사용하기 전에 확인해야 한다.
// 예를들어 배열의 모든 요소에 대해 문자열은 대문자로 바꾸고, 숫자에는 3을 곱하는 맵 동작을 적용한다고 가정하자.

let dd =[1, 'a']
dd.map(_ => {
    if (typeof _ === 'number') {
        return _ * 3
    }
    return _.toUpperCase()
})

// 어떤 동작을 수행하기 전에 typeof를 이용해 각 항목이 number인지 string인지 확인해야 한다.
// 객체와 마찬가지로 배열을 const로 만들어도 타입스크립트는 타입을 더 좁게 추론하지 않는다.
// 따라서 타입스크립트는 d와 e를 모두 number | string으로 추론했다.

// g는 특별한 상황으로, 빈 배열로 초기화하면 타입스크립트는 배열의 요소 타입을 알 수 없으므로 any일 것으로 추측한다.
// 배열을 조작하여 요소를 추가하면 타입스크립트가 주어진 정보를 이용해 배열의 타입을 추론한다.
// 배열이 정의된 영역을 벗어나면 (예: 함수 안에서 배열을 선언하고 이를 반환) 타입스크립트는 배열을 더이상 확장할 수 없도록 최종 타입을 할당한다.

function buildArray() {
    let a = [] // any[]
    a.push(1) // number[]
    a.push('x') // (string | number)[]
    return a
}
let myArray = buildArray() // (string | number)[]
myArray.push(true) // 에러 TS2345: 'true' 타입의 인수는 'string | number' 타입의 매개변수에 할당할 수 없음