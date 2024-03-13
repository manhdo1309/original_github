let physic_mark, chemistry_mark, biology_mark;
physic_mark = parseFloat(prompt("Nhập điểm vật lý của sinh viên: "));
chemistry_mark = parseFloat(prompt("Nhập điểm hóa học của sinh viên: "));
biology_mark = parseFloat(prompt("Nhập điểm sinh học của sinh viên: "));
let sum_mark = physic_mark + chemistry_mark + biology_mark;
let avg_mark = sum_mark / 3;
console.log("Tổng điểm của sinh viên: ", sum_mark);
console.log("Điểm trung bình của sinh viên: ", avg_mark) 