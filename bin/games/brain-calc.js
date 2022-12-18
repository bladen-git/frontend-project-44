#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../src/cli.js';
import {
  calcAnswerAssign, calcQuestion, correctAnswer, win, wrongAnswer,
} from '../../src/index.js';

const randomOp = () => {
  const x = Math.floor(Math.random() * 3) + 1;
  switch (x) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '???';
  }
};
const randomNum1 = () => Math.floor(Math.random() * 25) + 1;
const randomNum2 = () => Math.floor(Math.random() * 25) + 1;

const game = () => {
  const userName = name();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const savedOp = randomOp();
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    const answer = calcAnswerAssign(savedNum1, savedNum2, savedOp);

    const question = readlineSync.question(calcQuestion(savedNum1, savedNum2, savedOp));

    if (Number(question) === answer) correctAnswer();
    else wrongAnswer(question, answer, userName);
  }
  win(userName);
};

game();
