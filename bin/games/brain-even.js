#!/usr/bin/env node
import { name } from "../../src/cli.js";
import readlineSync from "readline-sync";
import { correctAnswer, wrongAnswer, win } from "../../src/index.js";

const randomNum = () => Math.round(Math.random() * 120);

const game = () => {
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const savedNum = randomNum();
    const question = readlineSync.question(
      "Question: " + savedNum + "\nYour answer: "
    );
    if (
      (question === "yes" && savedNum % 2 === 0) ||
      (question === "no" && savedNum % 2 !== 0)
    ) {
      correctAnswer();
    } else if (question === "yes") {
      wrongAnswer(question, "no", userName);
      return;
    } else {
      wrongAnswer(question, "yes", userName);
      return;
    }
  }
  win(userName);
};

game();
