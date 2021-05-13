// 느슨한 타입 언어가 마주하는 문제 상황
function ambiguity(str: any) {
  return str + 1000;
}

const result = ambiguity("1000");
console.log(typeof result, result); /* string, 10001000 */

// 타입을 검사하는 코드와 타입 캐스팅을 수행하는 코드로 에러 상황 억제
function ambiguity2(num: any) {
  if (typeof num !== "number") {
    num = Number(num);
  }

  return Number(num) + 1000;
}

const result2 = Number(ambiguity2("1000"));
console.log(typeof result2, result2); /* number, 2000 */
