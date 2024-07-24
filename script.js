const myLibrary = [];

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
  }
}

const dune = new Book("Dune", "Frank Herbert", 896, "not read yet");
const onyxStorm = new Book("Onyx Storm", "Rebecca Yarros", 500, "not read yet");
addBookToLibrary(dune);
addBookToLibrary(onyxStorm);
display();
