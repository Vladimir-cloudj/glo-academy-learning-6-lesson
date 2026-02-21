'use strict'
function createGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  function process() {
    const userInput = +prompt("Угадай число от 1 до 100");
    if (userInput === null) {
      alert("Игра окончена");
      return;
    }
    if (isNaN(userInput)) {
      alert("Введи число!");
      process();
      return;
    }
    // console.log(userInput, secretNumber);
    if (userInput < secretNumber) {
      alert("Загаданное число больше");
      process();
    } else if (userInput > secretNumber) {
      alert("Загаданное число меньше");
      process();
    } else if (userInput === secretNumber) {
        alert("Поздравляю, Вы угадали!!!");
        return
    }
  }
  process();
}

createGame();

