const { Shape, Square, Circle, Triangle } = require("./shapes");

describe("Circle", () => {
  test("test for a circle with a blue background", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.renderShape()).toEqual(
      `<circle cx="100" cy="100" r="39" fill="${shape.shapeColor}" />`
    );
  });
});

describe("Square", () => {
  test("test for a Sqaure with a grey background", () => {
    const shape = new Square();
    shape.setColor("grey");
    expect(shape.renderShape()).toEqual(
      `<rect x="100%" y="100%" fill="${shape.shapeColor}"/>`
    );
  });
});

describe("Traingle", () => {
  test("test for a triangle with a purple background", () => {
    const shape = new Triangle();
    shape.setColor("purple");
    expect(shape.renderShape()).toEqual(
      `<polygon points="200,10 250,190 150,190" fill="${shape.shapeColor}"/>`
    );
  });
});
