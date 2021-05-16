{
  function getSum(nums: number[]): number {
    /* reduce(누적값, 카운터 값) */
    let sum: number = nums.reduce((a, b) => {
      return a + b;
    });
    return sum;
  }

  const numSum = getSum([1, 2, 3, 4, 5]);
  console.log(`numSum = ${numSum}`); /* 15 */
}
