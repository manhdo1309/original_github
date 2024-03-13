let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
for(let i = 1; i < a; i++){
    if(i % b === 0){
        console.log("", i);
    }
}