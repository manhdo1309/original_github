let age = parseInt(prompt("Nhập vào một số"));
if(age % 2 === 0){
    console.log("Đây là số chẵn");
} else if (age % 2 !== 0){
    console.log("Đây là số lẻ");
} else if (isNaN(age)){
    console.log("Số không hợp lệ");
}
