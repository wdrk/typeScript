// 선언과 동시에 정의
const fruits: string[] = ["banana", "apple", "mango"];

// 선언과 정의가 따로
const fruits2: string[] = [];
fruits2.push("banana");
fruits2.push("apple");
fruits2.push("mango");

// any 타입으로 다른 자료형을 같이 배열에 넣기
const myVar: any[] = [1, "hi", true];

// 배열에 들어가는 타입을 제한하는 방법으로 유니언을 선언
const myVar2: (number | string | boolean)[] = [1, "hi", true];
