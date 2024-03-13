let month = parseInt(prompt("Nhập vào số tháng"));
if(month == 4 || month == 6 || month == 9 || month == 11){
    console.log("Tháng này có 30 ngày");
}else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    console.log("Tháng này có 31 ngày");
}else if(month == 2){
    console.log("Tháng này có 29 ngày");
}else if(month <= 0 && month >=13){
    console.log("Tháng không hợp lệ");
}