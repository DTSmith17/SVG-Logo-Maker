class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
}

class Circle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }
}
module.exports = { Shape, Square, Circle, Triangle };
