#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../src/cli.js';
import { correctAnswer, wrongAnswer, win } from '../../src/index.js';

const randomNum = () => Math.round(Math.random() * 120);

const answer = (question, num) => {
  if ((question === 'yes' && num % 2 === 0)
  || (question === 'no' && num % 2 !== 0)) return true;
  return false;
};

const game = () => {
  const userName = name();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const savedNum = randomNum();
    const question = readlineSync.question(
      `Question: ${savedNum}\nYour answer: `,
    );
    if (answer(question, savedNum) === true) {
      correctAnswer();
    } else if (question === 'yes') {
      wrongAnswer(question, 'no', userName);
      return;
    } else {
      wrongAnswer(question, 'yes', userName);
      return;
    }
  }
  win(userName);
};

game();
