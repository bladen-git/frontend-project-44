#!/usr/bin/env node
import readlineSync from "readline-sync";

const name = () => {
  const questionName = readlineSync.question("May I have your name? ");
  return questionName;
};

const randomNum = () => Math.round(Math.random() * 120);

const game = () => {
  console.log("node bin/brain-games.js\nWelcome to the Brain Games!");
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
      console.log("Correct!");
    } else {
      if (question === "yes") {
        console.log(
          "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again " +
            userName
        );
        return;
      } else {
        console.log(
          "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again " +
            userName
        );
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}`);
};

game();
