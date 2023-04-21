const root = document.querySelector("#root");
const list = document.createElement("ul");
root.append(list);

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

books.forEach((book) => {
  try {
    if (!book.author || !book.name || !book.price) {
      throw new Error(`В об'єкті масиву немає усіх властивостей. ${JSON.stringify(book)}`);
    }
    const listItem = document.createElement("li");
    listItem.innerHTML = `${book.author} - "${book.name}" - ${book.price} грн.`;
    list.append(listItem);
  } catch (error) {
    console.error(err.message);
  }
});
