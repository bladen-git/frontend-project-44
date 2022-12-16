#!/usr/bin/env node
import { name } from "../src/cli.js";
import readlineSync from "readline-sync";
import { correctAnswer, wrongAnswer, win } from "../src/index.js";

const randomNum1 = () => Math.floor(Math.random() * 10) + 1;
const randomNum2 = () => Math.floor(Math.random() * 50) + 1;
let smallestNum;

const isGreater = (a, b) => {
  a > b ? (smallestNum = b) : (smallestNum = a);
};

const game = () => {
  const userName = name();
  console.log("Find the greatest common divisor of given numbers.");
  for (let i = 0; i < 3; i += 1) {
    const savedNum1 = randomNum1();
    const savedNum2 = randomNum2();
    let gcd;

    isGreater(savedNum1, savedNum2);

    for (let j = 1; j <= smallestNum; j += 1) {
      if (savedNum1 % j === 0 && savedNum2 % j === 0) gcd = j;
    }
    const question = readlineSync.question(
      "Question: " + savedNum1 + " " + savedNum2 + "\nYour answer: "
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

game();
