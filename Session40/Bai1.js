let info = {

}
info.name = prompt("Nhập vào tên")
info.age = prompt("Nhập vào tuổi")
info.email = prompt("Nhập vào email")

localStorage.setItem("infos", JSON.stringify(info));

let storageInfo = JSON.stringify(info);

let personalInfo = JSON.parse(storageInfo);
document.getElementById("name").innerHTML = "Tên:" + " " + personalInfo.name;
document.getElementById("age").innerHTML = personalInfo.age + " " + "tuổi";
document.getElementById("email").innerHTML = "Email:" + " " + personalInfo.email;


