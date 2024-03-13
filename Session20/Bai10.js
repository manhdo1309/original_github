let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result);
/* 
    Màn hình console in ra kết quả là 39
    - Với toán tử a++, còn gọi là post-increment giá trị của a sẽ được sử dụng sau đó mới được tăng lên trong lần sử dụng tiếp theo.
    - Với toán tử ++a, còn gọi là pre-increment, giá trị của a ngay lập tức được tăng lên 1 đơn vị trong lần sử dụng hiện tại.
    - Vậy kết quả result:
        +) Lần ++a đầu tiên, a tăng từ 6 lên 7 và được sử dụng với giá trị bằng "7"
        +) Lần +a thứ 2, a vẫn bằng "7"
        +) Lần a++ thứ 3, a dược sử dụng với giá trị bằng 7 sau đó tăng lên "8"
        +) Lần ++a thứ 4, a tăng từ 8 lên 9 và sử dụng giá trị "9"
        +) Lần +a cuối cùng, a bằng "9"

        => result = 7 + 7 + 7 + 9 + 9 = 39
*/ 