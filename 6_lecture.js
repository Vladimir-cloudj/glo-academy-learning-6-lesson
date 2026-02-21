// (lexical Environment-лексическое окружение)
// внутри каждой функции есть скрытый объект
// в нем указываются все локальные переменные
// лексическое окружение определяется в момент вызова функции!
let a = 5;

function testing() {
  let b = 10;
  console.log(b);
}
// testing()
// console.log(b);
// ----------------------------
function test1(c, d) {
  // lexicalEnvironment = {c: 3, d: undefined}
  let a = 10;
  // lexicalEnvironment = {a: 10, c: 3, d: undefined}
  console.log(a, c, d);
  function test2() {
    // lexicalEnvironment = {}
    // в scope входят все переменные из родительского lexicalEnvironment
    // Scope = {a: 10, c: 3, d: undefined}
    // Scope определяется в момент описания функции
    console.log(a);
  }
  test2();
}
// test1(3)
// --------------------------

// --------------------------
// closure(замыкание. ф-я test3 замыкает в себе перемен x и ф-ю test4)
function test3(x) {
  function test4() {
    console.log(x);
  }
  test4();
}
// test3(5)

// замыкание - это функция вместе со всеми переменными, которые ей доступны
function one(x) {
  function two() {
    const a = +prompt("Введите число");
    x--;
    console.log(a, x);
    
    if (a !== x) {
      two();
    }
  }
  two();
}
// one(10);
// --------------------------
function counter(n) {
    return function(x) {
        return x + n
    }
}
let sum = counter(1)
// console.log(sum(15));
// ------------------------
// создание генератора ссылок(url)
function pathGenerator(url) {
    return function(imageName) {
        return url + imageName
    }
}
let urlToIcons = pathGenerator('https://mydomain.ru/assets/icons/')
let urlToImages = pathGenerator('https://mydomain.ru/assets/images/')

// console.log(urlToIcons('clock.png'));
// console.log(urlToImages('man.png'));
// ------------------------

