let a = parseFloat(prompt("Nhập vào số a"));
let b = parseFloat(prompt("Nhập vào số b"));
let cal = prompt("Nhập vào phép tính");
switch(cal){
    case "plus":
        let sum = a + b;
        console.log("Tổng của 2 số = ", sum);
        break;
    case "minus":
        let diff = a - b;
        console.log("Hiệu của 2 số = ", diff);
        break;
    case "multiple":
        let mul = a * b;
        console.log("Tích của 2 số = ", mul);
        break;
    case "divide":
        if(b !== 0){
            let div = a / b;
            console.log("Thương của 2 số = ", div);
        }
        else if (b === 0){
            console.log("Số không hợp lệ");
        }
}