export = {};

// 자바스크립트는 null, undefined 두 가지 값으로 부재를 표현한다.
// 타입스크립트도 두 가지 값을 모두 지원한다.
// 타입스크립트에서도 이값을 똑같이 null과 undefined라고 부른다.

// 타입스크립트에서 undefined 값의 타입은 오직 undefined 뿐이고 null 타입의 값은 null 뿐이라는 점에서 특별한 타입이다.
// 많은 자바스크립트 프로그래머가 두 값을 혼용하는데 사실 두 타입의 의미는 조금 다르다.
// undefined는 아직 정의하지 않았음을 의미하는 반편 null은 값이 없다는 의미다(예를 들어 값을 계사나려 하면 에러가 발생한다.).
// 이것이 규칙이지만 따릊 않아도 타입스크립트는 말리지 않는다.
// 하지만 되도록이면 이 규칙에 따라 상황에 맞는 타입을 사용하는 것이 좋다.

// 타입스크립트는 null과 undefined 외에도 void와 never 타입도 제공한다.
// 이들은 존재하지 않음의 특징을 조금 더 세밀하게 분류하는, 정말 특수하고 특별한 용도의 타입이다.
// void는 명시적으로 아무것도 반환하지 않는 함수의 반환 타입(예: consoole.log)을 가리키며
// never는 절대 반환하지 않는(예외를 던지거나 영원히 실행되는) 함수 타입을 가리킨다.

// (a) number 또는 null을 반환하는 함수
function a(x: number) {
    if (x < 10) {
        return x
    }
    return null
}

// (b) undefined를 반환하는 함수
function b() {
    return undefined
}

// (c) void를 반환하는 함수
function c() {
    let a = 2 + 2
    let b = a * a
}

// (d) never를 반환하는 함수
function d() {
    throw TypeError('I Always error')
}

// (e) never를 반환하는 또 다른 함수
function e() {
    while (true) {
        doSomeThing()
    }
}

// unknown이 모든 타입의 상위 타입이라면 never는 모든 타입의 서브타입니다.
// 즉, 모든 타입에 never를 할당할 수 있으며 never 값은 어디서든 안전하게 사용할 수 있다.
// 하지만 이는 지극히 이론적인 사실일 뿐 실제 이런 주제로 토론할 기회는 다른 언어를 사용하는 괴짜와 타입스크립트의 특징을 따질때 빼고는 없을 것이다.

// [타입, 의미]
// [numm, 값이 없음]
// [undefined, 아직 값을 변수에 할당하지 않음]
// [Void, return문을 포함하지 않는 함수]
// [never, 절대 반환하지 않는 함수]

// 엄격한 null 확인
// 예전 버전의 타입스크립트( 또는 TSC의 strictNullChecks 옵션을 false로 설정한 타입스크립트)에서는 null이 조금 다르게 동작한다.
// 이때 null은 never를 제외한 모든 타입의 하위 타입이다.
// 즉, 모든 타입은 null이 수 있으므로 모든 값이 Null인지 아닌지를 먼저 확인하지 않고는 타입이 무엇이라고 단정할 수 없다.
// 예를 들어 pizza라는 변수를 함수에 전달했고 그 변수에 .addAnchovies라는 메서드를 호출해야 한다면, 먼저 pizza가 null인지 확인한 다음에 그 동작을 수행할 수 있다.
// 실무에서 이는 굉장히 불편한 일이므로 보통 이 과정을 생략한다.
// 그리고 예상치 않은 상황에서 값이 nulldlfkaus fjsxkdladp claudwjrdls sjf vhdlsxj dPdhlrk qkftodgksek.

function addDeliciousFish(pizza: Pizza) {
    return pizza.addAnchovies() // 잡히지 않은 TypeError: null에서 'addAnchovies'라는 프로퍼티를 읽을 수 없음
}

// stricNullChecks = false로 설정하면 타입스크립트는 다음을 허용
addDeliciousFish(null)xw