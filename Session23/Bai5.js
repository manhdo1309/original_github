let a = Math.floor(Math.random() * 11);
let b;
while(a !== b){
    b = parseInt(prompt("Nhập vào 1 số"));
    if(a > b){
        alert("Số nhập lớn hơn");
    }
    else if(a < b){
        alert("Số nhập nhỏ hơn");
    }
    else if(a === b){
        alert("Trùng số ban đầu");
        break;
    }
}
