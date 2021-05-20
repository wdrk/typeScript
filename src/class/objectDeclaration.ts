{
  class Rectangle {
    _x: number;
    _y: number;

    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    getArea() {
      return this._x + this._y;
    }
  }

  const rectangle = new Rectangle(1, 5);
  const area: number = rectangle.getArea();
  console.log(area);
}