let a, b, c;
a = parseInt(prompt("Nhập vào số a"));
b = parseInt(prompt("Nhập vào số b"));
c = parseInt(prompt("Nhập vào số c"));
let max = a;
if(b > max){
    max = b;
}
else if(c > max){
    max = c;
}
console.log("Giá trị lớn nhất là: ", max)