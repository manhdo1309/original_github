let n = parseInt(prompt("Nhập vào một số bất kỳ"));
let isPrime = true;
for(let i = 2; i*i <= n; i++){
    if(n % i === 0 && n !== 0){
        isPrime = false;
    }
}
if(isPrime){
    console.log("", n, "là số nguyên tố");
}
else{
    console.log("", n, "không là số nguyên tố");
}