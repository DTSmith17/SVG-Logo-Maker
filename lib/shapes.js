class Shape {
  constructor(shapeColor, textColor, logoText) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.logoText = logoText;
  }

  render() {
    return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.renderShape()}
        <text>
        <tspan x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-weight:bold; font-size: 6em; fill:${
          this.textColor
        };">${this.logoText}</tspan>
        </text>
        </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderShape() {
    return `<rect x="100%" y="100%" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderShape() {
    return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderShape() {
    return `<polygon points="150,20 0,300 300,300" fill="${this.shapeColor}"/>`;
  }
}
module.exports = { Shape, Square, Circle, Triangle };
