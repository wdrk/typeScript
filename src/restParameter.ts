// 전개 연산자를 이용해서 0개 이상의 매개변수를 전달하면 호출할 수 있는 함수를 선언
function concat(...restParameter: any) {
  return restParameter.join("");
}

console.log(concat("a", "b", 1, 2, true, false)); /* ab12truefalse */
