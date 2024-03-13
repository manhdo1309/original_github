let a = +prompt("Nhập vào số a");
let sum = 1;
for(let i = 2; i <= a; i++){
    sum += 1/(i*10 + 3);
}
console.log(sum.toFixed(5));