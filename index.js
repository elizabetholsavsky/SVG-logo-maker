const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions.js');

function renderLogo(response) {
    const {userShape, userShapeColor, userText, userTextColor} = response;

    let result;

    switch(userShape) {
        case "Circle":
            result = new Circle(userShapeColor, userText, userTextColor).render();
            break;
        case "Square":
            result = new Square(userShapeColor, userText, userTextColor).render();
            break;
        case "Triangle":
            result = new Triangle(userShapeColor, userText, userTextColor).render();
            break;
    }

    return result;

};

function makeFile (filename, data) {
    fs.writeFile(filename, data, renderShape(data), (err) =>
        err ? console.log(err) : console.log(`Generated logo.svg`)
        )};

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        const SVG = renderLogo(response);
        makeFile("logo.svg", SVG);
        })
        .catch(err => {
            console.log(err)
        });
        }
        
init();