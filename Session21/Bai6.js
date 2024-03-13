let math_mark, litt_mark, eng_mark, avg;
math_mark = parseFloat(prompt("Nhập vào điểm toán: "));
litt_mark = parseFloat(prompt("Nhập vào điểm văn: "));
eng_mark = parseFloat(prompt("Nhập vào điểm tiếng anh: "));
avg = (math_mark + litt_mark + eng_mark) / 3;
if(avg >= 8.0 && avg <=10){
    console.log("Xếp loại GIỎI");
}
else if(avg >= 6.5 && avg <= 7.9){
    console.log("Xếp loại KHÁ");
}
else if(avg >= 5.0 && avg <= 6.4){
    console.log("Xếp loại TRUNG BÌNH");
}
else if(avg < 5.0){
    console.log("Xếp loại YẾU");
}
