// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function helloUser(name, surname, age) {
//     console.log(`Привет, ${name} ${surname}. Вы уже большой, вам ${age}.`)
// }

// helloUser('Maria', 'Chernigovskaya', '36');

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// const squared = (number) => {
//     console.log(number**2);
// }

// squared(3);

// number = Number.parseFloat(prompt('Введите число'));
// const positivOrNegativ = (number) => {
//     number > 0 ? console.log('+++') : console.log('---');
// }

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// const positivOrNegativ = (number) => {
//     if (number > 0 ) {
//         console.log('+++')
//     } else if  (number < 0 ) {
//         console.log('---')
//     } else {
//         console.log('');
//     }
// }

// const positivOrNegativ = (number) => {
//         if (Number.isFinite(number)) {
//             number > 0 ? console.log('+++') : console.log('---');
//         }
//     }

// positivOrNegativ(number);

// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.

// const sumNumber = (a, b, c) => {
//     console.log(a + b + c);

// }
// sumNumber(2, 3, 5)

// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// const a = Math.floor(Math.random() * (100 - 1) + 1);
// const b = Math.floor(Math.random() * (100 - 1) + 1);
// const c = Math.floor(Math.random() * (100 - 1) + 1);

// console.log(a);
// console.log(b);
// console.log(c);

// sumNumber(a, b, c);

// 3. Дан код: Расскажите, каким будет результат каждого из вызовов функции.

// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.

// const squareRoot = (number) => {
//     return(Math.sqrt(number));
// }
// const squareRoot = (number) => (Math.sqrt(number));

// console.log(squareRoot(36));

// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// const resultSumSquareRoot = squareRoot(3) + squareRoot(4);
// console.log(resultSumSquareRoot);

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.
const nimNumber = (a, b) => {
    return Math.min(a, b);
};

console.log(nimNumber(2, 4));
