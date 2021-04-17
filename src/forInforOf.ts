// 배열의 인덱스를 가져오는 for in 방식
const islands: string[] = ["jeju", "geoje", "jindo", "ganghwado", "namhaedo"];
for (let index in islands) {
  console.log(index, islands[index]);
}

// 객체의 key 를 가져오는 for in 방식
const fruitsObject: { [index: string]: string } = {
  a: "apple",
  b: "banana",
  c: "cherry",
};
for (let property in fruitsObject) {
  console.log(property, fruitsObject[`${property}`]);
}

// 문자열을 for of 방식으로 순환
for (let value of "hi") {
  console.log(value);
}

// 배열을 for of 방식으로 순환. 인덱스를 넣을 필요 없이 값을 바로 가져온다.
for (const arrValue of [1, 2, 3]) {
  console.log(arrValue);
}
