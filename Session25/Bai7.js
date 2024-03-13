let a = parseInt(prompt("Nhập vào số a"));
let b = parseInt(prompt("Nhập vào số b"));
let c = parseInt(prompt("Nhập vào số c"));
let d = parseInt(prompt("Nhập vào số d"));
let i = 1;
while(1){
    if(i % a === 0 && i % b === 0 && i % c === 0 && i % d ===0){
        console.log(i);
        break;
    }
    i++
}