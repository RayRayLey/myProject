//console.log("Hello, from console");

/*
1. генерируем число
2. делим диапозон на 2
3. сравниваем число с загаданным
4. делим уменьшенный диапозон на 2
5. если диапозон меньше 5 уменьшаем на 1
*/

const N = 50; //задает диапозон
const magicNumber = 5;

function randomNumber() {
  // Генерируем число от 1 до N
  return Math.floor(Math.random() * N) + 1;
}

let guess = N / 2;
let topLine = N;
let bottomLine = 0;

let answer = randomNumber();

console.log(`Компьютер 1 загадал число: ${answer}`);

while (true) {
  console.log(`Компьютер 2: Пробую число ${guess}.`);
  if (guess < answer) {
    console.log(`Компьютер 1: Больше.`);
    if (topLine - guess <= magicNumber) {
      guess += 1;
    } else {
      bottomLine = guess;
      guess += Math.floor((topLine - guess) / 2);
    }
  } else if (guess > answer) {
    console.log(`Компьютер 1: Меньше.`);
    if (guess - bottomLine <= magicNumber) {
      guess -= 1;
    } else {
      topLine = guess;
      guess -= Math.floor((guess - bottomLine) / 2);
    }
  } else if (guess === answer) {
    console.log(`Компьютер 1: Угадал!`);
    break;
  } else {
    console.log("Ошибка");
    break;
  }
}
