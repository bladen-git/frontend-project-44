#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("node bin/brain-games.js\nWelcome to the Brain Games!");

export const name = readlineSync.question("May I have your name? ");

console.log(`Hello, ${name}!`);

const randomOp = () => Math.floor(Math.random() * 3) + 1;
const randomNum1 = () => Math.floor(Math.random() * 25) + 1;
const randomNum2 = () => Math.floor(Math.random() * 25) + 1;

const game = () => {
  console.log("What is the result of the expression?");
  for (let i = 0; i < 3; i += 1) {
    const operator = randomOp();
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    if (operator === 1) {
      const question1 = readlineSync.question(
        "Question: " + savedNum1 + " + " + savedNum2 + "\nYour answer: "
      );
      if (Number(question1) === savedNum1 + savedNum2) {
        console.log("Correct!");
      } else {
        console.log(`${question1} is wrong answer ;(. Correct answer was ${
          savedNum1 + savedNum2
        }
          Let's try again ${name}`);
        return;
      }
    } else if (operator === 2) {
      const question2 = readlineSync.question(
        "Question: " + savedNum1 + " - " + savedNum2 + "\nYour answer: "
      );
      if (Number(question2) === savedNum1 - savedNum2) {
        console.log("Correct!");
      } else {
        console.log(`${question2} is wrong answer ;(. Correct answer was ${
          savedNum1 - savedNum2
        }
          Let's try again ${name}`);
        return;
      }
    } else {
      const question3 = readlineSync.question(
        "Question: " + savedNum1 + " * " + savedNum2 + "\nYour answer: "
      );
      if (Number(question3) === savedNum1 * savedNum2) {
        console.log("Correct!");
      } else {
        console.log(`${question3} is wrong answer ;(. Correct answer was ${
          savedNum1 * savedNum2
        }
          Let's try again ${name}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}`);
};

game();
