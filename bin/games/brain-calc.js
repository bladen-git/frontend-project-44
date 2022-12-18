#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../src/cli.js';
import { correctAnswer, win, wrongAnswer } from '../../src/index.js';

const randomOp = () => Math.floor(Math.random() * 3) + 1;
const randomNum1 = () => Math.floor(Math.random() * 25) + 1;
const randomNum2 = () => Math.floor(Math.random() * 25) + 1;

const game = () => {
  const userName = name();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operator = randomOp();
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    if (operator === 1) {
      const question1 = readlineSync.question(
        `Question: ${savedNum1} + ${savedNum2}\nYour answer: `,
      );
      if (Number(question1) === savedNum1 + savedNum2) {
        correctAnswer();
      } else {
        wrongAnswer(question1, savedNum1 + savedNum2, userName);
        return;
      }
    } else if (operator === 2) {
      const question2 = readlineSync.question(
        `Question: ${savedNum1} - ${savedNum2}\nYour answer: `,
      );
      if (Number(question2) === savedNum1 - savedNum2) {
        correctAnswer();
      } else {
        wrongAnswer(question2, savedNum1 - savedNum2, userName);
        return;
      }
    } else {
      const question3 = readlineSync.question(
        `Question: ${savedNum1} * ${savedNum2}\nYour answer: `,
      );
      if (Number(question3) === savedNum1 * savedNum2) {
        correctAnswer();
      } else {
        wrongAnswer(question3, savedNum1 * savedNum2, userName);
        return;
      }
    }
  }
  win(userName);
};

game();
