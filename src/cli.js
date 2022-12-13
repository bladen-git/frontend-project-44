import readlineSync from "readline-sync";

console.log("node bin/brain-games.js\nWelcome to the Brain Games!");

export const name = readlineSync.question("Your answer: ");

console.log(`Hello, ${name}!`);
