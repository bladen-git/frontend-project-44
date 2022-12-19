#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './cli.js';
import {
  calcAnswerAssign, calcQuestion, correctAnswer, randomOp, win, wrongAnswer,
} from './index.js';

export const gameCalc = () => {
  const randomNum1 = () => Math.floor(Math.random() * 25) + 1;
  const randomNum2 = () => Math.floor(Math.random() * 25) + 1;
  const userName = name();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const savedOp = randomOp();
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    const answer = calcAnswerAssign(savedNum1, savedNum2, savedOp);

    const question = readlineSync.question(calcQuestion(savedNum1, savedNum2, savedOp));

    if (Number(question) === answer) correctAnswer();
    else {
      wrongAnswer(question, answer, userName);
      return;
    }
  }
  win(userName);
};

export const gameEven = (a) => (a * 3);
