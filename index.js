const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Square, Circle, Triangle } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    message: "Logo text",
    name: "logoText",
  },
  {
    type: "input",
    message: "choose Text color.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose a shape.",
    name: "logoShape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "Choose a shape color.",
    name: "shapeColor",
  },
];

function generateSvg(data) {
  let myshape;
  if (data.logoShape === "Square") {
    myshape = new Square(data.shapeColor, data.textColor, data.logoText);
  } else if (data.logoShape === "Circle") {
    myshape = new Circle(data.shapeColor, data.textColor, data.logoText);
  } else if (data.logoShape === "Triangle") {
    myshape = new Triangle(data.shapeColor, data.textColor, data.logoText);
  }
  return myshape.render();
}

function writeToFile(fileName, data) {
  // Generate markdown data based on user input and write data to a filename
  let svgData = generateSvg(data);
  fs.writeFile(fileName, svgData, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}
function init() {
  // Prompt the user with questions using Inquirer
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    // Write user responses to a README.md file
    writeToFile("logo.svg", response);
  });
}

init();
