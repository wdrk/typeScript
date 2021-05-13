{
  function colors(a: string, ...rest: string[]): string {
    return `${a} ${rest.join(" ")}`;
  }

  const color1 = colors("red");
  const color2 = colors("red", "orange");
  const color3 = colors("red", "orange", "yellow");

  console.log(`color1 = ${color1}
  color2 = ${color2}
  color3 = ${color3}`);
  /*
      color1 = red
      color2 = red orange
      color3 = red orange yellow 
  */
}
