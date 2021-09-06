//npm Node packet Manager 
const { readFileSync } = require('node:fs');
var  readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

var languages =[];
var language = readFileSync.question('What is your mother language ?');
languages.push(language);
console.log(languages);

var pet ={};
var name = readFileSync.question('Your pet name: ');
var gender = readFileSync.question('Pet gender (Male/Female): ');
var weight = readFileSync.question('Weight: ');
pet.name = name;
pet.gender = gender;
pet.weight = weight;
console.log(pet);