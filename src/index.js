export const correctAnswer = () => console.log('Correct!');

export const wrongAnswer = (wrong, correct, name) => {
  console.log(`${wrong} is wrong answer ;(. Correct answer was ${correct}.`);
  console.log(`Let's try again, ${name}!`);
};

export const win = (name) => console.log(`Congratulations, ${name}!`);

export const calcQuestion = (num1, num2, operator) => `Question: ${num1} ${operator} ${num2}\nYour answer: `;

export const calcAnswerAssign = (a, b, op) => {
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

export const isPrime = (num) => {
  let result;
  for (let i = 2; i <= Math.round(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  if (result === undefined) {
    result = 'yes';
  }
  return result;
};

export const primeAnswer = (question, num) => {
  if ((question === 'yes' && isPrime(num) !== 'no')
  || (question === 'no' && isPrime(num) === 'no')) {
    return true;
  }
  return false;
};

export const randomOp = () => {
  const x = Math.floor(Math.random() * 3) + 1;
  switch (x) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '???';
  }
};
