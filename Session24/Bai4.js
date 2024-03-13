let n = +prompt("Nhập vào số n");
let sum = 0;
for(let i = 2; sum + i*i < n; i+= 2){
    sum += i*i;

}    console.log(sum);