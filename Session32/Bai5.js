class book{
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}
let book1 = new book("J. K. Rowling", "Harry Porter");
let book2 = new book( "George Martin", "A Song of Ice and Fire");
let book3 = new book("J. R. R. Tolkien", "The Lord of the Rings");
let book4 = new book("Paulo Coehlo", "The Alchemist");

let Books = [book1, book2, book3, book4];

let Auth_search = prompt("Nhập vào tên tác giả cần tìm kiếm");
let auth = false
for(let i = 0; i < Books.length; i++){
    if(Books[i].author === Auth_search){
        console.log(Books[i]);
        auth = true;
        break;
    }
}
if(auth === false){
    console.log("Không tìm thấy sách");
}
