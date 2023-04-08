const questions = [
    {
        name: 'userShape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'userShapeColor',
        message: 'What is the color of the shape?',
        type: 'input',
    },
    {
        name: 'userText',
        message: 'What is text? (three letters only)',
        type: 'input',
    },
    {
        name: 'userTextColor',
        message: 'What is the color of the text (keyword or hexadecimal?',
        type: 'input',
    },
];

module.exports = questions;
