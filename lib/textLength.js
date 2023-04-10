const Shape = require('./Shape.js')

function textLength(text) {
    if(text.length > 3) {
        throw new Error('Text may only be three characters long! Please try again.');
    };
};

module.exports = textLength;