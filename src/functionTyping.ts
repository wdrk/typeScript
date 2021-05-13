{
  function max(x: number, y: number): number {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }

  const a: number = max(1, 2);
  // const b: number = max("abc", "ABC"); /* 에러상황 */

  console.log(`a = ${a}`); /* a = 2 */
}
