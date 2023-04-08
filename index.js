const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const {Circle, Square, Triangle} = require('./lib/Shape.js');
const fileName = "logo.svg";
