// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  title;
  author;
  pages;
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(
      `Книга: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages}`
    );
  }
}

const book1 = new Book(
  "Аленький цветочек. Сказка ключницы Пелагеи",
  "Сергей Аксаков",
  58
);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
  name;
  age;
  grade;
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}
Age: ${this.age} 
Grade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

class Phonebook {
  contacts = [];

  addContact(userName, userPhone) {
    const contact = { name: userName, phone: userPhone };
    this.contacts.push(contact);
  }
  deleteContact(userName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === userName) {
        this.contacts.splice(i, 1);
      }
    }
    return;
  }
  findContactByName(userName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === userName) {
        return this.contacts[i];
      }
    }
    return "no contact";
  }
  findContactByPhone(userPhone) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].phone === userPhone) {
        return this.contacts[i];
      }
    }
    return "no contact";
  }
}
let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
phonebook.addContact("Сидоров", "967-65-43");
console.log(phonebook.contacts);
console.log(phonebook.findContactByName("Петров"));
console.log(phonebook.findContactByName("Сдоров"));
console.log(phonebook.findContactByPhone("987-65-43"));
phonebook.deleteContact("Иванов");

console.log(phonebook.contacts);
