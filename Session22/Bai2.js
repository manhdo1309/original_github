let a = +prompt("Nhập vào cạnh a");
let b = +prompt("Nhập vào cạnh b");
let c = +prompt("Nhập vào cạnh c");
if(a + b > c && b + c > a && a + c > b){
    console.log("Độ dài các cạnh tam giác hợp lệ");
}
else{
    console.log("Độ dài các cạnh tam giác không hợp lệ");
}