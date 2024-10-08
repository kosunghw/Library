const myLibrary = [];
const displayLibrary = [];

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
  let lastChild = bookShelf.lastChild;
  if (lastChild === null) {
    // IF SHELF IS EMPTY
    const newCard = document.createElement("div");
    // Create div.title, div.author, div.pages, div.read
    // And append each to the card.
    const title = document.createElement("div");
    title.textContent = `${myLibrary[0].title}`;
    title.classList.add("title");
    const author = document.createElement("div");
    author.textContent = `${myLibrary[0].author}`;
    author.classList.add("author");
    const pages = document.createElement("div");
    pages.textContent = `${myLibrary[0].pages}p.`;
    pages.classList.add("pages");
    const read = document.createElement("div");
    read.textContent = `${myLibrary[0].read}`;
    read.classList.add("read");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-button");
    const readBtn = document.createElement("button");
    readBtn.textContent = "READ";
    readBtn.classList.add("read-button");

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);
    newCard.classList.add("card");
    newCard.classList.add("grid-container");

    // Append the new card to the book shelf
    bookShelf.appendChild(newCard);
    setElementId();
  } else {
    let newIndex = Number(lastChild.id) + 1;
    const newCard = document.createElement("div");
    // Create div.title, div.author, div.pages, div.read
    // And append each to the card.
    const title = document.createElement("div");
    title.textContent = `${myLibrary[newIndex].title}`;
    title.classList.add("title");
    const author = document.createElement("div");
    author.textContent = `${myLibrary[newIndex].author}`;
    author.classList.add("author");
    const pages = document.createElement("div");
    pages.textContent = `${myLibrary[newIndex].pages}p.`;
    pages.classList.add("pages");
    const read = document.createElement("div");
    read.textContent = `${myLibrary[newIndex].read}`;
    read.classList.add("read");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-button");
    const readBtn = document.createElement("button");
    readBtn.textContent = "READ";
    readBtn.classList.add("read-button");

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);
    newCard.classList.add("card");
    newCard.classList.add("grid-container");

    // Append the new card to the book shelf
    bookShelf.appendChild(newCard);
    setElementId();
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
  error.className = "error";
  error.textContent = "FILL ALL INPUTS!";
});

confirmButton.addEventListener("click", (e) => {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value;
  const page = document.getElementById("form-page").value;
  const readYes = document.getElementById("read-yes");
  if (readYes.checked) {
    const read = "Yes";
    const newBook = new Book(title, author, page, read);
    addBookToLibrary(newBook);
  } else {
    const read = "Not read yet";
    const newBook = new Book(title, author, page, read);
    addBookToLibrary(newBook);
  }
  display();
  e.preventDefault();
  form.reset();
  dialog.close();
  error.className = "error";
  error.textContent = "FILL ALL INPUTS!";
});

bookShelf.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.className) {
    case "delete-button":
      let index = Number(target.parentElement.id);
      target.parentElement.remove();
      if (myLibrary.length < 2) {
        myLibrary.pop();
        setElementId();
      } else {
        myLibrary.splice(index, 1);
        setElementId();
      }
      break;

    case "read-button":
      // Select div with class="read" that has read status
      const readStatus = target.parentElement.children.item(3);
      // IF the book is read, switch to unread
      if (readStatus.textContent === "Yes") {
        readStatus.textContent = "Not read yet";
      } else {
        readStatus.textContent = "Yes";
      }
      break;
  }
});

function setElementId() {
  const children = bookShelf.childNodes;
  for (let i = 0; i < children.length; i++) {
    children[i].id = `${i}`;
  }
}

// Form validation
const inputs = document.querySelectorAll("input");
const error = document.querySelector("#form-title + span.error");

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    if (input.validity.valid) {
      error.textContent = "";
      error.className = "error hide";
    } else {
      showError();
    }
  });
});

function showError() {
  error.textContent = "FILL ALL INPUTS!";
  error.className = "error";
}
