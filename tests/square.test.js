const Square = require('../lib/Square.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const square = new Square('red','EKO','white');
        expect((square.shapeColor)).toEqual('red');
        expect((square.text)).toEqual('EKO');
        expect((square.textColor)).toEqual('white');
    });
});