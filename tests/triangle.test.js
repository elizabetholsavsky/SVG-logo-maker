const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {
    
    describe('Triangle class shape and color', () => {
        it('should return user shape and color choices', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual(
                `<polygon points="100, 15 200, 200 0, 200" fill="blue"/>`);
        });
    });

    describe('Triangle class text color', () => {
        it('should return user color choice', () => {
            const triangleText = new TriangleText();
            text.setTriangleTextColor("white");
            expect(triangleText.render()).toEqual(
                `<text x="100" y="185" font-size="70" text-anchor="middle" fill="white">${userText}</text>`);
        });
    });

});