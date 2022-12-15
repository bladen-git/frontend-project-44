import readlineSync from "readline-sync";

export const name = () => {
  console.log("node bin/brain-games.js\nWelcome to the Brain Games!");
  let questionName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${questionName}!`);
  return questionName;
};
