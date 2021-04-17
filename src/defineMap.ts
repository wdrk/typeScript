// "one" 이라는 키 값을 중복으로 설정함
const itMap = new Map([
  ["one", 1],
  ["one", 2],
]);
itMap.set("one", 3);

// 중복인 키 값을 제하고 가장 마지막으로 설정한 값을 가져온다
for (let entry of itMap) {
  console.log(entry);
}
console.log(itMap.get("one"));
