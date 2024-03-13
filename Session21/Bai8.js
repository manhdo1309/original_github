let height, weight, BMI;
height = parseFloat(prompt("Nhập vào chiều cao(m)"));
weight = parseFloat(prompt("Nhập vào cân nặng(kg)"));
BMI = weight/(height*height);
console.log("", BMI);
if(BMI < 18.5){
    console.log("Cân nặng thấp (gầy)");
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("Cân nặng bình thường");
}
else if(BMI = 25){
    console.log("Thừa cân");
}
else if(BMI > 25 && BMI <= 29.9){
    console.log("Tiền béo phì");
}
else if(BMI >= 30 && BMI <= 34.9){
    console.log("Béo phì độ I");
}
else if(BMI >= 35 && BMI <= 39.9){
    console.log("Béo phì độ II");
}
else if(BMI >= 40){
    console.log("Béo phì độ III");
}