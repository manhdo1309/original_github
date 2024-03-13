let a = +prompt("Nhập vào một số nguyên dương bất kỳ");

for(let i = 2; i < a; i++){
    let isPrime = true;
    for(let j = 2; j*j <= i; j++){
        if(i % j === 0){
            isPrime = false;
        }
    }
    if(isPrime){
        console.log("", i);
    }
}


