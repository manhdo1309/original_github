    let n = parseInt(prompt("Nhập vào 1 số nguyên dương"));
    let reversed = 0;
    while(n !== 0){
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n/10);
    }
    console.log(reversed);