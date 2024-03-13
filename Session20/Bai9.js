let a = 5;
let b= “5”;
console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);
/* 
    Uncaught SyntaxError: Invalid or unexpected token trong màn hình console thể hiện lỗi cú pháp (có gạch đỏ dưới chân giá trị “5”)
    do javascript không nhận dạng dấu ngoặc kép dạng “ ”. Cần phải thay thế dấu ngoặc kép sang dạng " ". 
    Sau khi thay thế dấu ngoặc kép, màn hình console trả về các giá trị:
    true
    false
    false
    true
        - Toán tử == so sánh giá trị của biến nếu bằng nhau thì trả về kết quả true (5=5)
        - Toán tử === so sánh cả giá trị và kiểu dữ liệu của biến nếu giống nhau thì trả về kết quá true (a là kiểu integer, b là kiểu string)
        - Toán tử != và !== hoạt động tương tự.
*/