const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape?',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the hexadecimal number",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        }
    },
    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again.");
            }
            return true;
        }
    },
    {
        name: 'textColorChoice',
        message: 'What is the color of the text?',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the color keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the hexadecimal number",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        }
    },
];

module.exports = questions;
