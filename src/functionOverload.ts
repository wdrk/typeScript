{
  // 가장 일반적인(general) 함수(매개변수를 any 타입으로 선언)의 시그니처를 가장 아래에 선언해야 함.
  // 구현을 각자 하면 안됨.
  function add(a: number): number;
  function add(a: number, c: number): number;
  function add(a: any, b?: any): any {
    if (b === undefined) {
      return a;
    } else {
      return a + b;
    }
  }
  console.log(add(1, 2)); /* 3 */
  console.log(add(1)); /* 1 */
}
