// console.log(document);
// console.dir(document);
//DOM là một đối tượng được xây dựng sẵn trong JS
//Dùng để kiểm soát, thao tác với toàn bộ các thành phần HTML sẽ xuất hiện trên trang web
/* 
    Truy vấn 1 thẻ (phần tử) HTML
    Truy vấn 1 tập hợp (collection) các thẻ HTML
*/

// document.getElementById(id)
// let h1 = document.getElementById("demo-id");
// let div = document.getElementById("div-id");

// console.log(h1);
// console.log(div);

//document.getElementsByClassName(name) trả về 1 tập hợp HTMLCollections là một kiểu dữ liệu gần giống mảng (có index và length) 
// let liList = document.getElementsByClassName("list-item");
// console.log(liList);
// console.log("First Li", liList[0]); 
// console.log("Last Li", liList[liList.length - 1]);

// for(let i = 0; i < liList.length; i++){
//     console.log(`Thẻ ${i + 1}`, liList[i]);
// }

//document.getElementByTagName(tag) tương tự document.getElementByClassName(name)
// let lis = document.getElementsByTagName("li"); 
// console.log(lis);

//document.querySelector(selector)
//document.querySelectorAll(selector)

// let h1 = document.getElementById("demo-id");
// console.log(h1);
//h1 là một đối tượng - object
//Properties and Methods
//Các thuộc tính và phần tử quan trọng dùng để kiểm soát các phần từ HTML
//Properties dùng để kiểm soát CONTENT: innerHTML, innerText, textContent

// console.log(h1.innerHTML);//innerHTML trả về toàn bộ nội dung là HTML nằm trong 1 thẻ
// console.log(h1.innerText);//innerText trả về toàn bộ nội dung là text nằm trong 1 thẻ
// console.log(h1.textContent);//textContent trả về toàn bộ nội dung là text bao gồm cả linebreak (xuống dòng) trong code nằm trong 1 thẻ

// h1.innerHTML = "<ul><li>Hello updated</li></ul>";
// h1.innerText = "Blablabla";
// h1.textContent = "Hohohoh";


//Properties dùng để kiểm soát ATTRIBUTES: id, class, style, ... 

// console.log(h1.id);
// if(h1.id === "demo-id"){
//     alert("Kiểm tra id");
// }

//.classList
// console.log(h1.classList); // danh sách class
// console.log(h1.classList[0]); // phần tử class đầu tiên
// console.log(h1.classList[h1.classList.length - 1]); //phần tử class cuối cùng

//add, remove, toggle, contains

// h1.classList.add("class-4");
// h1.classList.remove("class-1");
// console.log(h1.classList.contains("class-5"));

// h1.style.backgroundColor = "red";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";
// h1.style.fontSize = "30px";
// h1.style.fontWeight = "bold";
// h1.style.color = "white";
// h1.style.borderRadius = "50%";
// h1.style.border = "10px solid black";

//Các bộ thuộc tính dùng để di chuyển giữa các thẻ HTML(Traversing the DOM)
//parentElement, children

// let b = document.getElementById("child-b");
// console.log(b.parentElement.parentElement.children[2].children[0]);

//value là một thuộc tính đặc biệt dành riêng cho INPUT trong HTML, dùng để lấy ra giá trị hiện tại có trong ô input HTMl

// let input = document.getElementById("input");
// console.log(input.value);

// input.value = "Hello World";
// console.log(input.value);

//Các phương thức dùng để thao tác với các thẻ HTML
//Phương thức của document: document.createElement
//Phương thức của các thẻ HTML: appendChild(), remove()

// let li = document.createElement("li");
// let ul = document.getElementById("list")
// li.innerHTML = "<i>Đây là thẻ li mới</i>";
// li.classList.add("list-item");

// ul.appendChild(li);
// li.remove();

// console.log(li);

//Event
//Sự kiện là toàn bộ hành động phát sinh trong quá trình sử dụng ứng dụng web
//Mouse event, keyboard event, window event
//Sự kiện click

// let btn = document.getElementById("btn");
// console.log(btn);

// btn.onclick = function(){
//     alert("Hello world");
// }

