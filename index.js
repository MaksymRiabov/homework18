// 1. Визначення оцінки
const testResult = Number(prompt('What is the test result (0-100)?'));
testResult >= 60 ? alert('Passed') : alert('Failed');

// 2. Вибір напою
const drink = Number(
  prompt('What is your drink (1 — Coffee, 2 — Tea, 3 — Juice, 4 — Water)?')
);
switch (drink) {
  case 1:
    alert('Coffee');
    break;
  case 2:
    alert('Tea');
    break;
  case 3:
    alert('Juice');
    break;
  case 4:
    alert('Water');
    break;
  default:
    alert('Unknown drink');
}

// 3. Пошук найбільшого числа
const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));
const num3 = Number(prompt('Enter the third number'));
if ((num1 >= num2 && num1 >= num3) || (num1 == num2 && num2 == num3)) {
  alert(`The largest number is ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
  alert(`The largest number is ${num2}`);
} else if (num3 >= num1 && num3 >= num2) {
  alert(`The largest number is ${num3}`);
} else {
  alert('Your input is not a number');
}

// 4. Підрахунок суми
let countedNum = 0;
for (let i = 1; i <= 100; i += 1) {
  countedNum = countedNum + i;
}
console.log(countedNum);

// 5. Таблиця множення
let number = Number(prompt('Please, enter a number'));
let sum;
for (let i = 1; i <= 10; i++) {
  sum = number * i;
  console.log(`${number} * ${i} = ${sum}`);
}

// 6. Робота з рядком
const word = 'camouflage';
let numberOfLetters = 0;
for (let i = 0; i < word.length; i += 1) {
  if (word[i] !== 'a') {
    continue;
  }
  numberOfLetters++;
}
console.log(numberOfLetters);

// 7. Функція для розрахунку ціни
function calculatePrice(price, amount) {
  const total = price * amount;
  return total;
}

console.log(calculatePrice(340, 4));
console.log(calculatePrice(124, 6));
console.log(calculatePrice(865, 2));
