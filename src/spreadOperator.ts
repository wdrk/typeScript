let arr: number[] = [1, 2];
let arr2: number[] = [...arr, 3, 4];
console.log(`1번 : ${arr2}`); /* 1,2,3,4 */

// 배열 디스트럭처링
let [firstItem, ...rest]: [number, number, number] = [10, 20, 30];
console.log(`2번 : ${firstItem}`); /* 10 */
console.log(`3번 : ${rest}`); /* 20,30 */
console.log(`4번 : ${rest[0]}`); /* 20 */

// 객체 디스트럭처링
let numGroup = {
  n1: 1,
  n2: 2,
  n3: 3,
};
let { n2, ...n13 } = numGroup;
console.log(n2, n13); /* 2 { n1: 1, n3: 3 } */

// ! 책에서는 shallow copy라고 했는데 시험해보니 deep copy를 수행함
numGroup.n1 = 4;
console.log(numGroup.n1); /* 4 */
console.log(n13.n1); /* 1 */

// 객체 디스트럭처링 2
let { a, b, ...c } = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
console.log(a); /* 10 */
console.log(b); /* 20 */
console.log(c); /* { c: 30, d: 40 } */
