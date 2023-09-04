// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergeArrays = (arr1, arr2) => {
//     return [...arr1, ...arr2];
// }
// console.log(mergeArrays(arr1, arr2));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// const removeDuplicates = (...rest) => {
//     return rest.filter((item, index) => {
//         return rest.indexOf(item) === index;
//     })
// }

// const removeDuplicates = (...rest) => {
//     const unicArr = [...new Set(rest)];
//     return unicArr
// }

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));


// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.


// const getEvenNumbers = (array) => array.filter(el => !(el % 2));
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.


// const calculateAverage = (array) => (array.reduce((sum, el) => sum + el, 0)) / array.length;
// console.log(calculateAverage([1, 2, 3, 2, 4, 1, 5]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// const capitalizeFirstLetter = (str) => {
//     const arr = str.split(' ');
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);  
//     }
//     return arr.join(' ');
// }
// const capitalizeFirstLetter = (str) => { return str.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
    
// }

// const capitalizeFirstLetter = (str) => str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

// console.log(capitalizeFirstLetter('gfdhf dfgds ewtwt kk'));

//  Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую.

// const createCalculator = (params) => {
//     return {
//         add: (num) => num + params,
//         subtract: (num) => num - params
//     };
// };

// const first = createCalculator(1);
// console.log(first.add(5));
// console.log(first.subtract(10));


// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!

const createGreeting = (name) => () => console.log(`Hello, ${name}`);
const greeting = createGreeting('John');
greeting();

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true



const createPasswordChecker = (len) => {
    return (pass) => pass.length < len;
};

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); 
console.log(isPasswordValid('secret')); 

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

// function sumDigits(params) {
//     if (params < 10) {
//         return params;
//     } else {
//         return (params % 10) + sumDigits(Math.floor(params / 10));
//     }
// }

// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789));


// const sumDigits = (num) => {
//     let sum = 0;
//     for (const numb of `${num}`) {
//         sum += +numb;
//     }
//     return sum;
// };

// console.log(sumDigits(123));
// console.log(sumDigits(456789));


const sumDigits = (num) => num.toString().split('').map(Number).reduce((a, x) => a + x, 0);

console.log(sumDigits(123));
console.log(sumDigits(456789));