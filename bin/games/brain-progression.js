#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../src/cli.js';
import { correctAnswer, wrongAnswer, win } from '../../src/index.js';

const randomStartNum = () => Math.floor(Math.random() * 10) + 1;
const randomLength = () => Math.floor(Math.random() * 5) + 5;
const randomDif = () => Math.floor(Math.random() * 5) + 1;
const randomPos = (length) => length - Math.floor(Math.random() * 5);
let arr = [];
let answer;

const genLine = (arrStart, arrDif, arrLength, arrPos) => {
  arr = [];
  arr.push(arrStart);
  for (let i = 0; i < arrLength; i += 1) {
    arr.push(arr[arr.length - 1] + arrDif);
  }
  answer = arr[arrPos];
  arr[arrPos] = '..';
};

const game = () => {
  const userName = name();

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

    if (Number(question) === answer) {
      correctAnswer();
    } else {
      wrongAnswer(question, answer, userName);
      return;
    }
  }

  win(userName);
};

game();
