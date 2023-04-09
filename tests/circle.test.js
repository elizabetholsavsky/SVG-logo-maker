const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
            const circle = new Circle('black','EKO','yellow');
            expect((circle.shapeColor)).toEqual('black');
            expect((circle.text)).toEqual('EKO');
            expect((circle.textColor)).toEqual('yellow');
    });
});