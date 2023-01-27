class BookReview {
    constructor(book, review) {
        this.book = book;
        this.review = review;
    }

    addBookReview(book, review) {
        this.book = book;
        this.review = review;
    }

    getBookReview() {
        return this.review;
    }
}

class Book {    
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    addBook(title, author) {
        this.title = title;
        this.author = author;
    }

    getBook() {
        return this.title;
    }
}

const book = new Book();
book.addBook('The Alchemist', 'Paulo Coelho');
console.log(book.getBook());
