// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers;
// newArr.push(8);
// console.log(newArr);
// console.log(numbers);

/* 
    Về cơ bản, tham trị lưu lại kết quả trong bộ nhớ, khi gán cho biến khác và sửa thì kết quả giá trị trước khi gán sẽ không bị thay đổi. Còn với
    tham chiếu sẽ là ghi lại địa chỉ chứa giá trị chứ không lưu giá trị, khi gán cho các biến khác và sửa đổi thì việc sửa đổi sẽ là trực tiếp vào
    địa chỉ gốc. 
*/

// Tạo ra mảng mới:
let numbers = [1, 2, 3, 4, 5];
let newArr = Array.from(numbers);
newArr.push(8);
console.log(newArr);
console.log(numbers);

//Về cơ bản, chúng ta tạo ra một bản sao của mảng cũ chứ không sử dụng địa chỉ của mảng cũ (tạo ra 2 địa chỉ độc lập). Điều này giúp chúng ta tách 
//biệt giá trị của 2 mảng khi tương tác và thực hiện sửa đổi.