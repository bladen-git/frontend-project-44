#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './cli.js';
import {
  answerEven, calcAnswerAssign, calcQuestion, correctAnswer, randomOp, win, wrongAnswer,
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

export const gameEven = () => {
  const randomNum = () => Math.round(Math.random() * 120);
  const userName = name();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const savedNum = randomNum();
    const question = readlineSync.question(
      `Question: ${savedNum}\nYour answer: `,
    );
    if (answerEven(question, savedNum) === true) {
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
