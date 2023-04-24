const root = document.querySelector("#root");

const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

function getError(arr) {
  arr.forEach((book) => {
    try {
      if (!book.author) {
        throw new Error(
          `В об'єкті ${JSON.stringify(book)} масиву немає властивості author`
        );
      } else if (!book.name) {
        throw new Error(
          `В об'єкті ${JSON.stringify(book)} масиву немає властивості name`
        );
      } else if (!book.price) {
        throw new Error(
          `В об'єкті ${JSON.stringify(book)} масиву немає властивості price`
        );
      }
    } catch (error) {
      console.error(error);
    }
  });
}

getError(books);

function createList(arr) {
  const list = document.createElement("ul");
  root.append(list);
  arr.forEach((book) => {
    if (book.author && book.name && book.price) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${book.author} - "${book.name}" - ${book.price} грн.`;
      list.append(listItem);
    }
  });
}

createList(books);
