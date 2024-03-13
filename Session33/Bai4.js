class Book{
    constructor(author, title, publishedYear){
        this.author = author;
        this.title = title;
        this.published = publishedYear;
    }
    displayBook(){
        console.log("Tiêu đề:", this.title);
        console.log("Tác giả:", this.author);
        console.log("Năm xuất bản:", this.publish);
        console.log("----------------------------");
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    displayLibrary(){
        for(let i = 0; i < this.books.length; i++){
            console.log(this.books[i]);
        }
    }
} 

let book1 = new Book("J. K. Rowling", "Harry Porter", 1997);
let book2 = new Book( "George Martin", "A Song of Ice and Fire", 1996);
let book3 = new Book("J. R. R. Tolkien", "The Lord of the Rings", 1954);
let book4 = new Book("Paulo Coehlo", "The Alchemist", 2010);

let myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.displayLibrary();