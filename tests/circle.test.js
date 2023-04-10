const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const circle = new Circle('blue','EKO','white');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
        </svg>
        `
        );
    });
});