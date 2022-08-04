function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }

Book.prototype.info = function() {
    if (this.haveRead === TRUE) {
    return this.title + " by " + this.author + ", " + this.pages + " pages," + " have read."
    }
    else return this.title + " by " + this.author + ", " + this.pages + " pages," + " not read yet."
}
