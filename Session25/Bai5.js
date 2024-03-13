let a = parseInt(prompt("Nhập vào số nguyên")); //1645
let count = 0;
let temp;
do{
    temp = a % 10;    
    if(temp % 2 === 0 && temp !== 0){
        count++;
    }
    a = parseInt(a/= 10); 
}while(a >= 1);
console.log(count);