const Shape = require('../lib/Shape.js');

describe('Shape', () => {
    describe('dimensions', () => {
        it('should have width of 300 and height of 200', () => {
            const newShape = new Shape();
            expect(shape.render()).toEqual(
                `<svg version="1.1" 
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">

	                ${this.userShape}

                    ${this.userText}

                </svg>`
            )
        });
    });
});