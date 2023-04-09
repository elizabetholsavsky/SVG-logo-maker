const Shape = require('./Shape.js')
const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function setShape(response) {

    let userShape;

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = setShape;