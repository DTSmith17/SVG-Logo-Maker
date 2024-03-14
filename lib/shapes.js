class Shape {
  constructor(shapeColor, textColor, logoText) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.logoText = logoText;
  }

  render() {
    return `
        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${this.renderShape()}
        <text>
        <tspan x="0" y="100" style="font-weight:bold; font-size: 4em; fill:${
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
    return `<rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderShape() {
    return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}"></circle>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderShape() {
    return `<polygon points="200,10 250,190 150,190" fill="${this.shapeColor}"/>`;
  }
}
module.exports = { Shape, Square, Circle, Triangle };
