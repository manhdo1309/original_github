let students = [];
let n = +prompt("Nhập vào số lượng sinh viên");
for(let i = 0; i < n; i++){
    let studentId = prompt(`Nhập vào id của sinh viên ${i + 1}`);
    let studentName = prompt(`Nhập vào tên của sinh viên ${i + 1}`);
    let Student = {
        id: studentId,
        name: studentName,
    }
    students.push(Student);
}
console.log(students);

