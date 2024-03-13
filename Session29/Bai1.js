let a = +prompt("Nhập vào số a");
let b = +prompt("Nhập vào số b");
let c = +prompt("Nhập vào số c");
function evenOddcheck(a){
    if(a % 2 === 0){
        console.log("", a, "là số chẵn");
    }
    else if(a % 2 !== 0){
        console.log("", a, "là số lẻ");
    }
}
evenOddcheck(a);
evenOddcheck(b);
evenOddcheck(c);