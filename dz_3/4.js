"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const number1 = Number.parseFloat(prompt("Введите число"));
const action = prompt('Выберите действие +, -, *, /')
const number2 = Number.parseFloat(prompt("Введите число"));

const summaNumber = (a, b) => a + b;
const differenceNumber = (a, b) => {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
};
const multiplicationNumber = (a, b) => a * b;
const divisionNumber = (a, b) => a / b;

const calculat = (num1, num2) => {
    switch (action) {
        case '+': return summaNumber(num1, num2);
        case '-': return differenceNumber(num1, num2);
        case '*': return multiplicationNumber(num1, num2);
        case '/': return divisionNumber(num1, num2);
        default:
            console.log('Некорректное значение');
    }
}
console.log(calculat(number1, number2));



// console.log(
//     `Сумма чисел ${number1} и ${number2} равна ${summaNumber(number1, number2)}`
// );
// console.log(
//     `Разность чисел ${number1} и ${number2} равна ${differenceNumber(
//         number1,
//         number2
//     )}`
// );
// console.log(
//     `Умножение чисел ${number1} и ${number2} равно ${multiplicationNumber(
//         number1,
//         number2
//     )}`
// );
// console.log(
//     `Деление чисел ${number1} и ${number2} равно ${divisionNumber(
//         number1,
//         number2
//     )}`
// );
