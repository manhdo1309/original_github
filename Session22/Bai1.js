let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if(a % b === 0){
    console.log("Số a chia hết cho b");
}
else if(b % a === 0){
    console.log("Số b chia hết cho a");
}
else{
    console.log("Cả a và b đều không chia hết cho nhau");
}