const Triangle = require('../Triangle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('lime','EKO','aliceblue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text>
        </svg>
        `
        );
    });
});