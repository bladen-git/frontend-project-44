export const correctAnswer = () => console.log('Correct!');

export const wrongAnswer = (wrong, correct, name) => {
  console.log(`${wrong} is wrong answer ;(. Correct answer was ${correct}.`);
  console.log(`Let's try again, ${name}!`);
};

export const win = (name) => console.log(`Congratulations, ${name}!`);
