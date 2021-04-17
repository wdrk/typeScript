// 제네릭 배열 선언 정의
const num: Array<number> = [1, 2, 3];
const num2: Array<number | string> = [1, "hello"];

// 타입을 참조해서 제네릭 배열을 선언하는 타입 쿼리(type queries) 선언
const num3: typeof num2 = [2, "hi"];

// 객체 타입을 가진 제네릭 배열
const nums: Array<() => string> = [() => "one", () => "two"];

// 배열 선언과 요소 추가를 분리
let num4: Array<number> = new Array<number>();
num4.push(1);
num4.push(2);
num4.push(3);

console.log(`num : ${num}`);
console.log(`num2 : ${num2}`);
console.log(`num3 : ${num3}`);
console.log(nums[0]());
console.log(num4);
