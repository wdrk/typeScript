{
  const numbers: string[] = ['one', 'two', 'three', 'four', 'five'];

  // 위치에 따라 순서대로 디스트럭처링 수행
  const [nums1, nums2] = numbers;
  console.log(`num1 : ${nums1}, num2 : ${nums2}`);

  // 쉼표를 이용해서 부분 생략하는 방법
  let [, , nums3, nums4] = numbers;
  console.log(`nums3 : ${nums3}, nums4 : ${nums4}`);

  // 디스트럭처링을 이용해 변수값을 교체
  [nums4, nums3] = [nums3, nums4];
  console.log(`nums4: ${nums4}, nums3 : ${nums3}`);

  // 기본값을 설정하는 방법
  const [color1, color2 = 'blue'] = ['black'];
  console.log(`color1 : ${color1}, color2 : ${color2}`);
}
