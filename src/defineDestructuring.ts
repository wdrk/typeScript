// 기본 선언 방법
const { id, country } = { id: 'happy', country: 88 };
console.log(`id : ${id}`);
console.log(`country : ${country}`);

// 초기값을 적용해서 선언
const { id2, country2 = 33 } = { id2: 'hi' };
console.log(`id2 : ${id2}`);
console.log(`country2 : ${country2}`);

// 이름 재설정 방법
const { id3: newName, country3: newCountry } = { id3: 'bye', country3: 99 };
console.log(`newName : ${newName}`);
console.log(`newCountry : ${newCountry}`);
