let n = +prompt("Nhập vào số nguyên dương");
let a = 0, b = 1, temp;
for(let i = 0; i <= n; i++){
    if(i <= 1){
        temp = i;
    }
    else{
        temp = a + b;
        a = b;
        b = temp;
    }
}
console.log(temp);