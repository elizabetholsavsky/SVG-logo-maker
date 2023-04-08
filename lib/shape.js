class Shape {
    constructor(userShapeColor, userText, userTextColor) {
        this.userShapeColor = userShapeColor;
        this.userText = userText;
        this.userTextColor = userTextColor;
    }
};

class Circle extends Shape {
    constructor(userShapeColor, userText, userTextColor) {
        super(userShapeColor, userText, userTextColor);  
    }

    render() {`
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.userShapeColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
    </svg>`}
};

class Square extends Shape {
    constructor(userShapeColor, userText, userTextColor) {
        super(userShapeColor, userText, userTextColor);  
    }

    render() {`
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.userShapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
    </svg>`}
};

class Triangle extends Shape {
    constructor(userShapeColor, userText, userTextColor) {
        super(userShapeColor, userText, userTextColor);  
    }

    render() {`
    <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.userShapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.userTextColor}">${this.userText}</text>
    </svg>`}
};

module.exports = {Shape, Circle, Square, Triangle};