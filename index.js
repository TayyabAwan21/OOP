#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(num) {
        if (num == 0) {
            this.personality = "Introvert";
        }
        if (num == 1) {
            this.personality = "Extrovert";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
let student = new Student();
let user = await inquirer.prompt([
    {
        name: "res", type: "number",
        message: "Type 1 if you like to talk to others or Type 0 if rather to keep to yourself"
    }, {
        name: "name", type: "input",
        message: "Enter your name: "
    }
]);
student.askQuestion(user.res);
student.name = user.name;
console.log(chalk.bgGreenBright(`Your name is ${student.name} and 
your peronality type is ${student.getPersonality()}`));
