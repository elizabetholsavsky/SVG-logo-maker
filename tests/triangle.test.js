const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('blue','EKO','orange');
        expect((triangle.shapeColor)).toEqual('blue');
        expect((triangle.text)).toEqual('EKO');
        expect((triangle.textColor)).toEqual('orange');
    });
});