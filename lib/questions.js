const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'colorChoice',
        message: 'What is the color of the shape?',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "ShapeColorWord",
        message: "Enter your color keyword",
        when: (answers) => answers.colorChoice === 'color keyword'
    },
    {
        type: "input",
        name: "ShapeColor",
        message: "Enter your hexadecimal number.",
        when: (answers) => answers.colorChoice === 'hexadecimal'
    },
    {
        name: 'text',
        message: 'What is text? (three letters only)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text may only be three characters long! Please try again.");
            }
            return true;
        }
    },
    {
        name: 'textColor',
        message: 'What is the color of the text (keyword or hexadecimal?)',
        type: 'input',
    },
];

module.exports = questions;
