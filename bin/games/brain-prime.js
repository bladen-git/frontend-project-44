#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../src/cli.js';
import {
  correctAnswer, isPrime, primeAnswer, wrongAnswer, win,
} from '../../src/index.js';

const randomNum = () => Math.floor(Math.random() * 50) + 1;

const game = () => {
  const userName = name();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let j = 0; j < 3; j += 1) {
    const savedNum = randomNum();
    const question = readlineSync.question(
      `Question: ${savedNum} \nYour answer: `,
    );

    if (primeAnswer(question, savedNum) === true) {
      correctAnswer();
    } else {
      wrongAnswer(question, isPrime(savedNum), userName);
      return;
    }
  }
  win(userName);
};

game();
