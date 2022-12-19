#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './cli.js';
import {
  answerEven, calcAnswerAssign, calcQuestion, correctAnswer, isPrime, primeAnswer,
  randomOp, win, wrongAnswer,
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

let smallestNum;

const isGreater = (a, b) => {
  if (a > b) {
    smallestNum = b;
  } else {
    smallestNum = a;
  }
};

export const gameGCD = () => {
  const randomNum1 = () => Math.floor(Math.random() * 10) + 1;
  const randomNum2 = () => Math.floor(Math.random() * 50) + 1;

  const userName = name();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    let gcd;

    isGreater(savedNum1, savedNum2);

    for (let j = 1; j <= smallestNum; j += 1) {
      if (savedNum1 % j === 0 && savedNum2 % j === 0) gcd = j;
    }
    const question = readlineSync.question(
      `Question: ${savedNum1} ${savedNum2}\nYour answer: `,
    );
    if (Number(question) === gcd) {
      correctAnswer();
    } else {
      wrongAnswer(question, gcd, userName);
      return;
    }
  }
  win(userName);
};

export const gamePrime = () => {
  const userName = name();
  const randomNum = () => Math.floor(Math.random() * 50) + 1;

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

let answerProgression;
let arr;

const genLine = (arrStart, arrDif, arrLength, arrPos) => {
  arr = [];
  arr.push(arrStart);
  for (let i = 0; i < arrLength; i += 1) {
    arr.push(arr[arr.length - 1] + arrDif);
  }
  answerProgression = arr[arrPos];
  arr[arrPos] = '..';
};

export const gameProgression = () => {
  const userName = name();
  const randomStartNum = () => Math.floor(Math.random() * 10) + 1;
  const randomLength = () => Math.floor(Math.random() * 5) + 5;
  const randomDif = () => Math.floor(Math.random() * 5) + 1;
  const randomPos = (length) => length - Math.floor(Math.random() * 5);
  console.log('What number is missing in the progression?');

  for (let j = 0; j < 3; j += 1) {
    const savedStartNum = randomStartNum();
    const savedLength = randomLength();
    const savedDif = randomDif();
    const savedPos = randomPos(savedLength);

    genLine(savedStartNum, savedDif, savedLength, savedPos);
    const question = readlineSync.question(
      `Question: ${arr.join(' ')}\nYour answer: `,
    );

    if (Number(question) === answerProgression) {
      correctAnswer();
    } else {
      wrongAnswer(question, answerProgression, userName);
      return;
    }
  }

  win(userName);
};
