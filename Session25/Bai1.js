let number = +prompt("Nhập vào số nguyên dương bất kỳ")
let sum = 0;
for(let i = 1; i <= number; i++){
    console.log("", i);
    sum += i;
}
if(sum % 2 !== 0){
    console.log("", sum);
}


