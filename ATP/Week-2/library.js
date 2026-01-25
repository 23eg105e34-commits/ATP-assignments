// Book Class
class Book {
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
    borrow() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    isLongBook() {
        return this.pages > 300;
    }
}
// Creating Book Objects
const library = [
    new Book("Harry Potter", "J.K. Rowling", 450),
    new Book("1984", "George Orwell", 328),
    new Book("The Hobbit", "J.R.R. Tolkien", 310),
    new Book("The Alchemist", "Paulo Coelho", 208),
    new Book("To Kill a Mockingbird", "Harper Lee", 281)
];
//  Display info of all books
console.log(" All Books:");
library.forEach(book => console.log(book.getInfo()));
//  Borrow 2 books and show availability
library[0].borrow(); // Harry Potter
library[2].borrow(); // The Hobbit
console.log("\n After Borrowing Two Books:");
library.forEach(book =>
    console.log(`${book.title} - Available: ${book.isAvailable}`)
);
//Return 1 book and show updated status
library[0].returnBook(); // Return Harry Potter
console.log("\n After Returning One Book:");
library.forEach(book =>
    console.log(`${book.title} - Available: ${book.isAvailable}`)
);
//Count long books (>300 pages)
const longBookCount = library.filter(book => book.isLongBook()).length;
console.log("\n Number of Long Books (>300 pages):", longBookCount);
//List all available books
console.log("\n Available Books:");
library
    .filter(book => book.isAvailable)
    .forEach(book => console.log(book.getInfo()));
