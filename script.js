const myLibrary = [];
const tempLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Select card container
const bookShelf = document.querySelector("#cards");
function display() {
  for (const book of myLibrary) {
    if (!tempLibrary.includes(book)) {
      // IF BOOK IS NOT IN SHELF
      // For every element in myLibrary,
      // Create a new card div
      const newCard = document.createElement("div");
      // Create div.title, div.author, div.pages, div.read
      // And append each to the card.
      const title = document.createElement("div");
      title.textContent = `${book.title}`;
      title.classList.add("title");
      const author = document.createElement("div");
      author.textContent = `${book.author}`;
      author.classList.add("author");
      const pages = document.createElement("div");
      pages.textContent = `${book.pages}p.`;
      pages.classList.add("pages");
      const read = document.createElement("div");
      read.textContent = `${book.read}`;
      read.classList.add("read");

      newCard.appendChild(title);
      newCard.appendChild(author);
      newCard.appendChild(pages);
      newCard.appendChild(read);
      newCard.classList.add("card");
      newCard.classList.add("grid-container");

      // Append the new card to the book shelf
      bookShelf.appendChild(newCard);
      tempLibrary.push(book);
    }

    continue;
  }
}

const dialog = document.getElementById("new-book-dialog");
const form = document.querySelector("#new-book-form");
const showButton = document.querySelector("#new-book");
const cancelButton = document.querySelector("#cancel");
const confirmButton = document.querySelector("#confirm");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
});

confirmButton.addEventListener("click", (e) => {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value;
  const page = document.getElementById("form-page").value;
  const read = document.getElementById("form-read").value;
  const newBook = new Book(title, author, page, read);
  addBookToLibrary(newBook);
  display();
  e.preventDefault();
  form.reset();
  dialog.close();
});

const dune = new Book("Dune", "Frank Herbert", 896, "not read yet");
const onyxStorm = new Book("Onyx Storm", "Rebecca Yarros", 500, "not read yet");
const duner = new Book("Dune", "Frank Herbert", 896, "not read yet");
const dunerr = new Book("Dune", "Frank Herbert", 896, "not read yet");
addBookToLibrary(dune);
addBookToLibrary(onyxStorm);
addBookToLibrary(duner);
addBookToLibrary(dunerr);
display();
