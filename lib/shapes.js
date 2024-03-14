class Shape {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
  renderShape() {
    return `<circle cx="100" cy="100" r="50"></circle>`;
  }
  render() {
    return `
        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.renderShape()}
        <text>
        <tspan x="0" y="100" style="font-weight:bold; font-size: 4em; fill: ${
          this.textColor
        };">${this.text}</tspan>
        </text>
        </svg>`;
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
