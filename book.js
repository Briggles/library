let myLibrary = [];
const documentBooks = document.querySelector("#main");
const newBookBtn = document.querySelector("#newBook");
const popUpStatus = document.querySelector("#popUp");
const addBookBtn = document.querySelector("#addBtn");

firstBook = new Book("The Hobbit", "Tolkein", 695, true);
secondBook = new Book("The Cat and the Hat", "Dr. Seuss", 22, false);
addBookToLibrary(firstBook, myLibrary);
addBookToLibrary(secondBook, myLibrary);
displayBooks(myLibrary);

newBookBtn.addEventListener("click", () => {
    popUpStatus.style.display = 'block';
    console.log("new book button pressed.")
});

addBookBtn.addEventListener("click", () => {
    popUpStatus.style.display = 'none';

    newBook = new Book(
      document.getElementById('title').value, 
      document.getElementById('author').value,
      document.getElementById('pages').value,
      document.getElementById('read').value
    )
    addBookToLibrary(newBook, myLibrary);
    displayBooks(myLibrary);
});

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }

Book.prototype.info = function() {
    if (this.haveRead === true) {
    return this.title + " by " + this.author + ", " + this.pages + " pages," + " have read."
    }
    else return this.title + " by " + this.author + ", " + this.pages + " pages," + " not read yet."
}

function addBookToLibrary(book, library) {
  library.push(book);
}

function displayBooks(library) {
  for (i = 0; i < library.length; i++) {
    currentCard = documentBooks.appendChild(createCard());
    currentCard.textContent = 
    library[i].title + " by " +
    library[i].author + ", " +
    library[i].pages + " pages.  Already read: " +
    library[i].haveRead;
  }
}

function createCard() {
  let cardID = document.createElement("div");
  cardID.className = "bookCard";
  return cardID;
}

