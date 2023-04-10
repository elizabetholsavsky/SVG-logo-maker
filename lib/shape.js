const textLength = require("./textLength");

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        textLength(text);
        this.textColor = textColor;
    }
};

module.exports = Shape;