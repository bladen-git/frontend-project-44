export const correctAnswer = () => console.log('Correct!');

export const wrongAnswer = (wrong, correct, name) => {
  console.log(`${wrong} is wrong answer ;(. Correct answer was ${correct}.`);
  console.log(`Let's try again, ${name}!`);
};

export const win = (name) => console.log(`Congratulations, ${name}!`);

export const calcQuestion = (num1, num2, operator) => `Question: ${num1} ${operator} ${num2}\nYour answer: `;

export const answerAssign = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return '???';
  }
};
