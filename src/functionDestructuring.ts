// type을 써서 디스트럭처링 매개변수에 타입을 설정할 수 있다
type A = { name: string; nationality?: string };
const printProfiles = ({ name, nationality = '?' }: A) => {
  console.log(name);
  console.log(nationality);
};

printProfiles({ name: 'happy' });
