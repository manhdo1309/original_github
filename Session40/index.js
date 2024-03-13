// //Tạo localStorage

// //Kiểu dữ liệu JSON

// //Sự khác nhau giữa JSON và OBJECTS

// //Cách chuyển đổi từ kiểu JS sang JSON
// const user = {
//     id: 1,
//     name: "Nguyễn Văn A",
// };

// let users = [
//     {
//         id: 1,
//         name: "NVB",
//     },
//     {
//         id: 2,
//         name: "NVC",
//     },
// ];

// let userJSON = JSON.stringify(user);
// console.log(userJSON);

// //Cách chuyển đổi từ JSON sang JS
// let userJS = JSON.parse(userJSON);
// console.log(userJS);

// //Thêm dữ liệu lên localStorage
// localStorage.setItem("user", userJSON);
// localStorage.setItem("users", JSON.stringify(users))

// //Lấy dữ liệu từ localStorage
// let userLocal = localStorage.getItem("user");
// console.log(JSON.parse(userLocal));

// //Xóa dữ liểu khỏi localStorage
// localStorage.removeItem("user");

// //Xóa toàn bộ key khỏi localStorage
// localStorage.clear();

//Xây dựng ứng dụng todoList
//1. Thêm mới công việc và lưu lên localStorage
//Thiết kế dữ liệu cho dối tượng công việc: name, status, id
//2. Hiển thị danh sách công việc ra ngoài giao diện
//3. Xóa công việc 
//4. Sửa công việc

// const jobsDatabase = [
//     {
//         name: "Đánh răng",
//         status: true,
//         id: 1,
//     },
//     {
//         name: "Rửa mặt",
//         status: true,
//         id: 2,
//     },
//     {
//         name: "Ăn sáng",
//         status: false,
//         id: 3,
//     },
// ]

// let input = document.querySelector(".input");
// let list = document.querySelector(".list");
// let btn = document.querySelector(".add-btn");



// btn.onclick = function(){
//     input.value; 
//     let newTodo = {
//         name: input.value,
//         id: jobsDatabase[jobsDatabase.length - 1].id + 1,
//         status: false,
//     }
//     jobsDatabase.push(newTodo);

// }

//Session Storage
//Tạo session Storage

const userLogin = {
    id: 1234,
    name: "Nguyễn Văn A",
}

sessionStorage.setItem("userLogin", JSON.stringify(userLogin));