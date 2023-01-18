//classe library
class Library {
    books = [];

    addBook(bookInfo) {
        const book = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(book);
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    getBook(id) {
        return this.books.find(book => book.id === id);
    }

    updateBook(id, info) {
        const book = this.getBookById(id);
        if (book) {
            book.title = info.title || book.title;
            book.description = info.description || book.description;
            book.author = info.author || book.author;
        }
        return book;
    }
}
