let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
if(a === 0 && b === 0){
    console.log("Phương trình vô số nghiệm");
}
else if(a === 0 && b !== 0){
    console.log("Phương trình vô nghiệm");
}
else if(a !==0 && b !== 0){
    let x = -b/a;
    console.log("Phương trình có nghiệm: ", x);
}