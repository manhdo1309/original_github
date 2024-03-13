let a = +prompt("Nhập số có 4 chữ số");
if(a > 999 && a < 10000){
    for(let i = 0; i < 4; i++){
        let temp = a % 10;
        console.log("", temp);
        a = Math.floor(a / 10);
    }
}
else{
    console.log("Số không hợp lệ");
}

