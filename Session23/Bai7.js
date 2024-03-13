let a = +prompt("Nhập vào một số nguyên dương bất kỳ");
let sum = 0;
for(let i = 1; i < a; i++){
    if(a % i === 0){
        sum += i;
    }
}
if(a === sum){
    console.log("", a, "là số hoàn hảo");
}
else if(a !== sum){
    console.log("", a, "không là số hoàn hảo");
}