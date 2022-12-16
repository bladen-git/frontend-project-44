#!/usr/bin/env node
import { name } from "../../src/cli.js";
import readlineSync, { question } from "readline-sync";
import { correctAnswer, wrongAnswer, win } from "../../src/index.js";

const randomNum = () => Math.floor(Math.random() * 50) + 1;

const isPrime = (num) => {
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return "no";
    }
  }
};

const game = () => {
  const userName = name();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let j = 0; j < 3; j += 1) {
    const savedNum = randomNum();
    const question = readlineSync.question(
      "Question: " + savedNum + "\nYour answer: "
    );

    if (
      (question === "yes" && isPrime(savedNum) !== "no") ||
      (question === "no" && isPrime(savedNum) === "no")
    ) {
      correctAnswer();
    } else {
      wrongAnswer(question, isPrime(savedNum), userName);
      return;
    }
  }
  win(userName);
};

game();
