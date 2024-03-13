let id = document.getElementById("id");
let studentName = document.getElementById("name");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.onclick = function(){
    let hasError = false;

    if(id.value.length !== 6){
        alert("Id phải gồm 6 ký tự");
        hasError = true;
    }else{
        let validId = document.createElement("li");
        validId.innerHTML = id.value;
        output.appendChild(validId);
    }
    if(studentName.value.length === 0){
        alert("Tên sinh viên không được bỏ trống");
        hasError = true;
    }else{
        let validName = document.createElement("li");
        validName.innerHTML = studentName.value;
        output.appendChild(validName);
    }
    if(age.value < 18){
        alert("Tuổi yêu cầu lớn hơn hoặc bằng 18");
        hasError = true;
    }else{
        let validAge = document.createElement("li");
        validAge.innerHTML = age.value;
        output.appendChild(validAge);
    }
    let phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!phoneRegex.test(phone.value)) {
        alert("Số điện thoại phải có định dạng +84");
        hasError = true;
    }else{
        let validPhone = document.createElement("li");
        validPhone.innerHTML = phone.value;
        output.appendChild(validPhone);
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Email không hợp lệ");
        hasError = true;
    }else{
        let validEmail = document.createElement("li");
        validEmail.innerHTML = email.value;
        output.appendChild(validEmail);
    }
    if (!hasError) {

    }

    return false;
}