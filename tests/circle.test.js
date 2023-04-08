const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    
    describe('Circle class shape and color', () => {
        it('should return user shape and color choices', () => {
            const circle = new Circle();
            circle.setColor("green");
            expect(circle.render()).toEqual(
                `<circle cx="150" cy="100" r="100" fill="green" />`);
        });
    });

    describe('Circle class text color', () => {
        it('should return user color choice', () => {
            const circleText = new CircleText();
            text.setCircleTextColor("white");
            expect(circleText.render()).toEqual(
                `<text x="150" y="125" font-size="70" text-anchor="middle" fill="white">${userText}</text>`);
        });
    });
});