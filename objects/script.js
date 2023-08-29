// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.
/*
const weeks = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};
console.log(weeks[2]);
*/
/*
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

const user = {
    name: 'имя',
    surname: 'фамилия',
    age: 20
}
console.log(user.name, user.surname, user.age);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
user.midlName = 'отчество';
console.log(user);


// 4. Удалите свойство surname.

delete user.midlName;
console.log(user);
*/
/*
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
const weeksDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const weeksNum = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней, 
// а значениями - их номера.
const weeks = {};
for (let i = 0; i < weeksDay.length; i++) {
    weeks[weeksDay[i]] = weeksNum[i];
}
console.log(weeks);
*/
/*
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.
const number = {x: 1, y: 2, z: 3};



for (const key in number) {
    number[key] **=2;
}
console.log(number);
*/

// Задание 3:
 

const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}

 
// Найдите сумму всех чисел, приведенного объекта.

let sum = 0;
/* for (const keyOut in obj) {
    for (const keyIn in obj[keyOut]) {
        sum += obj[keyOut][keyIn];
    }
}
 
console.log(sum); */
 
// const myFun = (obj) => {
//     let sum = 0;
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += myFun(obj[key]);
//         } else {
//             sum += obj[key];
//         }
//     }
 
//     return sum;
// };
 
// // myFun(obj);
// // console.log(sum);
 
// console.log(myFun(obj));


/* 1. Создайте объект riddle.
2. Добавьте свойства question со значениями(текст загадки) и 
answer (ответ на загадку).
3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
question и сравнивает ответ с answer.
В случае верного ответа, необходимо поздравить пользователя.
В случае, если пользователь ответил неверно, необходимо сообщить ему об этом и 
подсказать.
Если ответил неверно во второй раз, то в консоль выводится текст: 
“вы проиграли”. */
 
/* const riddle = {
    question: 'Какой фрукт погубил человечество?',
    answer: 'яблоко',
    answerTrue: 'Ответ верный',
    answeFalse: 'вы проиграли',
    helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
    askQuestion() {
        let question = prompt(this.question);
 
        if (question.toLowerCase().trim() === this.answer) {
            console.log(this.answerTrue);
        } else {
            for (const key of this.helper) {
                question = prompt(key);
 
                if (question.toLowerCase().trim() === this.answer) {
                    console.log(this.answerTrue);
                    return;
                }
            }
            console.log(this.answeFalse);
        }
    }
}; */
 
// const riddle = {
//     question: 'Какой фрукт погубил человечество?',
//     answer: 'яблоко',
//     answerTrue: 'Ответ верный',
//     answeFalse: 'вы проиграли',
//     helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
//     askQuestion() {
//         if (this.checkIf(this.question)) {
//             console.log(this.answerTrue);
//             return;
//         }
 
//         for (const hint of this.helper) {
//             if (this.checkIf(this.question)) {
//                 console.log(this.answerTrue);
//                 return;
//             }
//         }
//         console.log(this.answeFalse);
 
//     },
//     checkIf(myQuestion) {
//         return prompt(myQuestion).toLowerCase().trim() === this.answer;
//     }
// };
/* 
const riddle = {
    question: 'Какой фрукт погубил человечество?',
    answer: 'яблоко',
    answerTrue: 'Ответ верный',
    answeFalse: 'вы проиграли',
    helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
    askQuestion() {
        for (const hint of [this.question, ...this.helper]) {
            if (this.checkIf(hint)) {
                console.log(this.answerTrue);
                return;
            }
        }
        console.log(this.answeFalse);
    },
    checkIf(myQuestion) {
        return prompt(myQuestion).toLowerCase().trim() === this.answer;
    }
};
 
riddle.askQuestion(); */
 
/* const arr = [1, 3, 5, 7];
const arr2 = [100, 200, ...arr];
 
console.log(arr2); */
 
/* const fun = (a, b, c) => {
    console.log(a, b, c);
};
 
const arr = [100, 2, 45];
 
fun(...arr); */
 
//rest
/* const fun = (a, ...nums) => {
    console.log(nums);
    console.log(a);
};
 
fun(100, 200, 400); */
 
const obj = {
    name: 'Коля',
    age: 24
};
 
const obj2 = {
    test: 'Hello',
    age: 34
};
 
const obj3 = {
    ...obj,
    ...obj2
};
 
console.log(obj3); 

