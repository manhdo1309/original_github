let n = +prompt("Nhập vào số n");
let sum = 0;
let i = 0;
do{
    i++;
    sum += i;
}while(sum + i + 1 < n);
console.log("", i);