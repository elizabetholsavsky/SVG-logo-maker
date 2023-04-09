const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColor',
        message: 'What is the color of the shape?',
        type: 'input',
    },
    {
        name: 'text',
        message: 'What is text? (three letters only)',
        type: 'input',
    },
    {
        name: 'textColor',
        message: 'What is the color of the text (keyword or hexadecimal?',
        type: 'input',
    },
];

module.exports = questions;
