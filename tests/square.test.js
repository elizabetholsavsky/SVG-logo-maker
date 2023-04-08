const Square = require('../lib/Square.js');

describe('Square', () => {

    describe('Square class shape and color', () => {
        it('should return user shape color choices', () => {
            const square = new Square();
            square.setColor("red");
            expect(square.render()).toEqual(
                `<rect width="200" height="200" fill="red"/>`);
        });
    });

    describe('Square class text color', () => {
        it('should return user color choice', () => {
            const squareText = new SquareText();
            text.setSquareTextColor("white");
            expect(squareText.render()).toEqual(
                `<text x="100" y="125" font-size="70" text-anchor="middle" fill="white">${userText}</text>`);
        });
    });

});