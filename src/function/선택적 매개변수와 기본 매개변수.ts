export {};

// 객체와 튜플 타입에서처럼 함수에서도 ?를 이용해 선택적 매개변수를 지정할 수 있다.
// 함수의 매개변수를 선언할 때 필수 매개변수를 먼저 지정하고 선택적 매개변수를 뒤에 추가한다.

function log(message: string, userId?: string) {
    let time = new Date().toLocaleDateString()
    console.log(time, message, userId || 'Not singed in')
}

log('Page loaded')  // "12:38:31 PM Page loaded Not signed in" 출력
log('User signed in', 'da763be') // "12: 38:31 PM User singed in da763be" 출력

// 자바스크립트에서는 매개변수에 기본값을 지정할 수 있다.
// 의미상으로는 호출자가 해당 매개변수에 값을 전달하지 않아도 되므로 매개변수를 선택적으로 만드는 것과 같다.
// (선택적 매개변수는 뒤에 와야 하지만 기본 매개변수는 어디에나 추가할 수있다는 점이 다르다.)

function log1(message: string, userId = 'Not singed in') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

log('User clicked on a button', 'da763be')
log('User signed out')

// userId에 기본값을 제공하므로 선택형 마크(?)와 타입을 지정할 필요가 없어졌다.
// 영리한 타입스크립트는 기본값으로 매개변수의 타입을 추론할 수 있기 때문이다.
// 덕분에 코드가 간결해지고 읽기도 쉬워진다. 물론 일반 매개변수에 타입을 지정하듯이 기본 매개변수에도 타입을 명시할 수 있다.

type Context = {
    appId?: string
    userId?: string
}

function log2(message: string, context: Context = {}) {
    let time = new Date().toISOString()
    console.log(time, message, context.userId)
}

// 보통 실무에서는 선택적 매개변수보다 기본 매개변수를 더 자주 사용하게 된다.