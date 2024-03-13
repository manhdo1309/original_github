let a, b, c;
a = parseInt(prompt("Nhập vào số a"));
b = parseInt(prompt("Nhập vào số b"));
c = parseInt(prompt("Nhập vào số c"));
if(a > b && a > c && b > c){
    console.log("", c, b, a);
}
else if(a > b && a > c && c > b){
    console.log("", b, c, a);
}
else if(b > a && b > c && a > c){
    console.log("", c, a, b);
}
else if(b > a && b > c && c > a){
    console.log("", a, c, b);
}
else if(c > b && c > a && a > b){
    console.log("", b, a, c);
}
else if(c > b && c > a && b > a){
    console.log("", a, b, c);
}