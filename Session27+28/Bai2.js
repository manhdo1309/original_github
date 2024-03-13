let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let array = [];
if(a > b){
    for(let i = b + 1; i < a; i++){
        array.push(i);
    }
}
else if(b > a){
    for(let i = a + 1; i < b; i++){
        array.push(i);
    }
}
console.log(array);