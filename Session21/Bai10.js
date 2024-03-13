/* 
    Về cơ bản, lệnh if-else được dùng khi có nhiều điều kiện cần kiểm tra (các điều kiện phức tạp với các biểu thức logic) 
    còn lệnh switch-case được dùng khi cần so sánh giá trị của biểu thức với nhiều giá trị khác nhau và cụ thể hơn.
    Ví dụ: số ngày trong tháng
*/
let month;
month = +prompt("Nhập vào tháng");
// Sử dụng if-else:
// if(month == 4 || month == 6 || month == 9 || month == 11){
//     console.log("Tháng này có 30 ngày");
// }else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
//     console.log("Tháng này có 31 ngày");
// }else if(month == 2){
//     console.log("Tháng này có 29 ngày");
// }else if(month <= 0 && month >=13){
//     console.log("Tháng không hợp lệ");
// }

// Sử dụng switch-case:
// switch(month){
//     case 1: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 2: 
//         console.log("Tháng này có 29 ngày");
//         break;
//     case 3: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 4: 
//         console.log("Tháng này có 30 ngày");
//         break;
//     case 5: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 6: 
//         console.log("Tháng này có 30 ngày");
//         break;
//     case 7: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 8: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 9: 
//         console.log("Tháng này có 30 ngày");
//         break;
//     case 10: 
//         console.log("Tháng này có 31 ngày");
//         break;
//     case 11: 
//         console.log("Tháng này có 30 ngày");
//         break;
//     case 12: 
//         console.log("Tháng này có 31 ngày");
//         break;
// }
