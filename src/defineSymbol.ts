// "hello" 인수는 심벌의 설명(description)이다. 심벌에 접근할 때 사용한다.
let hello = Symbol('hello');

// Symbol()은 인자 없이 호출해도 된다.
let hello2 = Symbol();

// 유일하면서 (Symbol() 사용했으므로) 불변(const 사용했으므로)인 상수 선언
const hello3 = Symbol();
