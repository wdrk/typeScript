{
  // 일반 함수에 타입을 지정해서 선언하는 방법
  function concat(str1: string, str2: string): string {
    return str1 + str2;
  }

  // 익명 함수에 타입을 지정해서 선언하는 방법
  const myConcat = function (str1: string, str2: string): string {
    return str1 + str2;
  };

  // 함수 타입을 분리해서 선언하는 방법
  const myConcat2: (str1: string, str2: string) => string = (str1, str2) => {
    return str1 + str2;
  };

  // type alias를 이용해서 함수의 타입을 선언하는 방법
  type calcType = (a: number, b: number) => number;
  const addCalc: calcType = (a, b) => a + b;
  const minusCalc: calcType = (a, b) => a - b;
}
