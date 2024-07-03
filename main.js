// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
//  1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
//  2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
//  3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
//   4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
//   5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку. Семинар 2. Продвинутая работа с функциями и классами. Обработка ошибок 💡Продолжение на следующем слайдеЗадание 1 (продолжение) Семинар 2. Продвинутая работа с функциями и классами. Обработка ошибок

// class BankAccount {
//     #balance = 0;
//     constructor(balance) {
//         if (balance < 0) {
//             throw new Error('Отрицательный баланс для инилизации счета');

//         }
//         this.#balance = balance;
//     }
//     get balance() {
//         return this.#balance;
//     }
//     set balance(balance) {
//         this.#balance = balance;
//     }
//     deposit(cash) {
//         if (cash <= 0) {
//             throw new Error('Сумма для депозита должна быть больше 0');

//         }
//         this.#balance += cash;
//         return this.#balance;
//     }
//     withdraw(cash) {
//         if (cash <= 0) {
//             throw new Error('Сумма для снятия должна быть больше 0');

//         }
//         if (this.#balance - cash < 0) {
//             throw new Error('Сумма для снятия больше суммы счета');

//         }
//         this.#balance -= cash;
//         return this.#balance
//     }
// }
// let account = new BankAccount(500);
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);

// account.withdraw(100);
// console.log(account.balance);
// class User {
//     name;
//     family;
//     constructor(name, family) {
//         this.name = name;
//         this.family = family;
//     }
//     get name() {
//         return this.name;
//     }
//     get family() {
//         return this.family;
//     }
// }

// class RegularUser extends User {
//     constructor(name, family) {
//         super(name, family);

//     }

// }

// class PremiumUser extends User {
//     constructor(name, family) {
//         super(name, family);
//     }
//     premiumAccount = null;
//     setPremiumAccount() {
//         this.premiumAccount = new Date().setFullYear(new Date(). getFullYear() + 1);
//     }
// }
// function getAccountInfo(user) {
//     if (user instanceof PremiumUser) {

//          console.log(user.premiumAccount ?? 'Информация отсутствует', user.name, user.family);
//     } else if (user instanceof RegularUser) {
//         console.log('Пользователь без премиум аккаунта', user.name, user.family);

//     } else {
//         console.log('Тип пользователя не определен');
//     }

// }

// const regular = new RegularUser('Вася', 'Иванов');
// const premium = new PremiumUser('Оля',  'Олина');

// premium.setPremiumAccount();

// const premiumLim = new PremiumUser('Поля', 'Гагарина');

// getAccountInfo(regular);
// getAccountInfo(premium);
// getAccountInfo(premiumLim);

// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ. 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить". 2. Добавьте место (например, div) для вывода сообщения пользователю. 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.

// const comment = document.querySelector('.comment');
// const btn = document.querySelector('.btn');
// const num = document.querySelector('.num');
// btn.addEventListener('click', function (e) {
//     try {
//         const inputElement = num.value;
//         if (isNaN(inputElement)){
//             throw new Error('Это не число');
//         }
//         comment.textContent = 'Молодец!';
//     } catch (error) {
//         comment.textContent = error.message;
//     }
// });

// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
class Library {
  #books;
  constructor(initialBooks = []) {
    // вот тут инициализация массива, его можно делать прямо в скобках конструктора
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error("Начальный список содержит дубликаты");
    }
    this.#books = initialBooks;
  }
  get allBooks() {
    return this.#books;
  }
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга с названием "${title}" уже существует`);
    }
    this.#books.push(title);
  }
  removeBook(title) {
    const bookIndex = this.#books.indexOf(title);
    if (bookIndex === -1) {
      throw new Error(`Книги с названием  "${title}" нет в библиотеке`);
    }
    this.#books.splice(bookIndex, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const myLibrary = new Library(["Война и мир", "Преступление и наказание"]);
console.log(myLibrary.allBooks);
myLibrary.addBook("Мастер и Маргарита");
console.log(myLibrary.hasBook("Мастер и Маргарита"));
myLibrary.removeBook("Война и мир");
console.log(myLibrary.allBooks);

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function addReview(reviewText) {
  if (reviewText.length < 50 || reviewText.length > 500) {
    // throw new Error("Отзыв должен содержать от 50 до 500 символов");
    console.log("Error")
  }
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.textContent = reviewText;
  document.getElementById("reviews-container").appendChild(reviewElement);
}

window.onload = () => {
  initialData.forEach((product) => {
    product.reviews.forEach((review) => {
      addReview(review.text);
    });
  });
};

document.getElementById("submit-review").addEventListener("click", () => {
  const reviewInput = document.getElementById("reviewInput");
  try {
    addReview(reviewInput.value);
    reviewInput.value = "";
  } catch (error) {
    alert(error.message);
  }
});

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
