class Book{
    constructor(author, title, publishedYear){
        this.author = author;
        this.title = title;
        this.published = publishedYear;
        this.isAvailable = true;
    }
    borrow(){
        if(this.isAvailable){
            this.isAvailable = false;
            console.log("Sách đã cho mượn");
        }else{
            console.log("Sách không khả dụng để cho mượn");
        }
    }
    returnBook(){
        if(this.isAvailable === false){
            this.isAvailable = true;
            console.log("Sách đã được trả/sách khả dụng để cho mượn");
        }else{
            console.log("Sách chưa được mượn, không thể trả sách");
        }
        
    }
}

class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    isBookAvailable(bookTitle) {
        let findBook = false;
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].title === bookTitle) {
                findBook = true;
                if (this.books[i].isAvailable) {
                    console.log("Sách khả dụng");
                } else {
                    console.log("Sách không khả dụng");
                }
                break;
            }
        }
        if(findBook === false){
            console.log("Sách không khả dụng");
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

myLibrary.isBookAvailable("Harry Porter");
book1.returnBook();
book1.borrow();
myLibrary.isBookAvailable("Harry Porter");
book1.borrow();
book1.returnBook();
myLibrary.isBookAvailable("Harry Porter");

let choice;
do{
    console.log("===== Quản lý công việc =====");
    console.log("1. Thêm mới công việc");
    console.log("2. Hiển thị danh sách công việc");
    console.log("3. Tìm kiếm công việc theo ID");
    console.log("4. Thoát chương trình");
    choice = prompt("Nhập lựa chọn của bạn (1-4):");
    switch (choice) {
        case "1":
            addJob();
            break;
        case "2":
            displayJobs();
            break;
        case "3":
            searchJobById();
            break;
        case "4":
            console.log("Chương trình kết thúc.");
            break;
    }
}while (choice !== "4");