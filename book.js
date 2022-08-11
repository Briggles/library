class Book {
  constructor(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  }
}

class Library {
  constructor(library) {
    this.library = library;
  }

  addBookToLibrary(book) {
    this.library.push(book);
  }
  
  displayBooks() {
    for (let i = 0; i < this.library.length; i++) {
      console.log(i);
      let currentCard = documentBooks.appendChild(this.createCard());
      currentCard.id = "card" + i;
      currentCard.textContent = 
      this.library[i].title + " by " +
      this.library[i].author + ", " +
      this.library[i].pages + " pages.  Already read: " +
      this.library[i].haveRead;
      let button =  document.createElement("button");
      let node = document.createTextNode("Remove Book");
      button.id =  i;
      button.addEventListener("click", () => {
        myLibrary.removeBookFromLibrary(button.id);
      });
      button.appendChild(node);
      const para = document.createElement("p");
      para.textContent = "Was Read: ";
      const isReadCheckBox = document.createElement("input");
      isReadCheckBox.type = "checkbox";
      isReadCheckBox.id = "check" + i;
      isReadCheckBox.value = "yes";
      if (this.library[i].haveRead == true) isReadCheckBox.checked = true;
      else isReadCheckBox.checked = false;
      isReadCheckBox.addEventListener("click", () => {
        let strippedID = isReadCheckBox.id.replace('check', '');
        console.log("Is this checked: " + isReadCheckBox.checked);
        this.toggleReadStatus(strippedID, isReadCheckBox.checked);
      });
      currentCard.appendChild(para);
      para.appendChild(isReadCheckBox);
      currentCard.appendChild(button);
    }
  }

  removeBookFromLibrary(book) {
    this.library.splice(book,1);
    this.clearDisplay();
    this.displayBooks();
  }

  clearDisplay() {
    while (documentBooks.firstChild) {
      documentBooks.removeChild(documentBooks.lastChild);
    }}

    toggleReadStatus(id, isChecked) {
      //console.log("id:" + id + "isChecked: " + isChecked);
      this.library[id].haveRead = isChecked;
      this.clearDisplay();
      this.displayBooks();
    }

    createCard() {
      let cardID = document.createElement("div");
      cardID.className = "bookCard";
      return cardID;
    }
}

// End of Class declarations.

const documentBooks = document.querySelector("#main");
const newBookBtn = document.querySelector("#newBook");
const popUpStatus = document.querySelector("#popUp");
const addBookBtn = document.querySelector("#addBtn");

// Listeners go here.

newBookBtn.addEventListener("click", () => {
  popUpStatus.style.display = 'block';
});

addBookBtn.addEventListener("click", () => {
  popUpStatus.style.display = 'none';
 
  let newBook = new Book(
    document.getElementById('title').value, 
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('read').checked 
  )
  console.log("read: " + document.getElementById('read').value);
  myLibrary.addBookToLibrary(newBook);
  myLibrary.clearDisplay();
  myLibrary.displayBooks();
});

// Initialize library and first couple books.

let myLibrary = new Library([]);
let firstBook = new Book("The Hobbit", "Tolkein", 695, true);
let secondBook = new Book("The Cat and the Hat", "Dr. Seuss", 22, false);
myLibrary.addBookToLibrary(firstBook);
myLibrary.addBookToLibrary(secondBook);
myLibrary.displayBooks();



