let studentInfo = document.getElementById("student-infomations")
let students = [
    {
        id: 1,
        name: "rikkei",
        email: "rikkei@gmail.com",
        phone: "0823868888",
        address: "hà nội",
        gender: "nam"
    },
    {
        id: 2,
        name: "academy",
        email: "academy@gmail.com",
        phone: "0828638888",
        address: "HCM",
        gender: "nữ"
    }
];
function renderStudents(){
    let text = "";
    for(let i = 0; i < students.length;i++){
        text +=
        `<tr>
            <td>${students[i].id}</td>
            <td>${students[i].name}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].address}</td>
            <td>${students[i].gender}</td>
            <td>
                <button onclick="editUser(${students[i].id})" >edit</button>|
                <button onclick="deleteUser(${students[i].id})" >delete</button>
            </td>
        </tr>
        `
    }
    studentInfo.innerHTML = text;
}

renderStudents();

let addId = students.length;
let submit = document.getElementById("btn");
let action = "create";
submit.addEventListener("click", function(e, i){
    e.preventDefault();  
    if(document.getElementById("name").value&&document.getElementById("email").value&&document.getElementById("tel").value&&document.getElementById("address").value){
        addId++;
        let addGender = document.querySelector("input[type=radio]:checked").value;
        let addName = document.getElementById("name").value;
        let addEmail = document.getElementById("email").value;
        let addPhone = document.getElementById("tel").value;
        let addAddress = document.getElementById("address").value;
    
        let newStudent = {
            id: addId,
            name: addName,
            email: addEmail,
            phone: addPhone,
            address: addAddress,
            gender: addGender
        }
        if(action=="create"){
            // Thực hiện thêm mới
            students.push(newStudent);
            localStorage.setItem("studentsList", JSON.stringify(students));
            refresh();
        }else{
            // Thực hiện cập nhật
            for(let i = 0; i < students.length; i++){
                if(action == students[i].id){
                    students.splice(i,1,{...newStudent, id: action });
                    localStorage.setItem("studentsList", JSON.stringify(students));
                    document.getElementById("btn").innerText = "Lưu lại";
                    action = "create";
                    renderStudents();
                    refresh();
                    return;
                }
            }
        }
        renderStudents();
    }
})

function refresh(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("address").value="";
}

function deleteUser(idUser){
    // console.log("gọi hàm", idUser);
    /*
        Quay về bài toán đi xóa user trong list user có id =
    */
    let confirmDelete = confirm("Bạn có muốn xóa hay không?");
    if(!confirmDelete){
        return
    }
    //Viết logic xóa
    for(let i = 0; i < students.length; i++){
        if(students[i].id == idUser){
            students.splice(1,1);
            renderStudents();
            break;
        }
    }
}

function editUser(idUser){
    action = idUser;
    for(let i = 0; i < students.length; i++){
        if(idUser == students[i].id){
            document.getElementById("name").value = students[i].name;
            document.getElementById("email").value = students[i].email;
            document.getElementById("tel").value = students[i].phone;
            document.getElementById("address").value = students[i].address;
            if(students[i].gender == "Nam"){
                document.getElementById("male").checked = true;
            }else{
                document.getElementById("female").checked = true;
            }
            document.getElementById("btn").innerText = "Edit";
            break;
        }
    }
}

function findName(){
    let findName = document.getElementById("search").value;
    console.log(findName);
    let data = [];
    if(findName == null){
        renderStudents();
    }else{
        for(let i = 0; i < students.length; i++){
            if(students[i].name.includes(findName) == true){
                data.push(students[i]);
            }
        }
        output(data);
    }
}

function sapXep(){
    let s = students.sort(function(a,b){
        let sv1 = a.name.toLowerCase();
        let sv2 = b.name.toLowerCase();
        return sv1 == sv2 ? 0 : sv1 > sv2 ? 1 : -1;
    })
    // console.log(s);
    output(s);
}

function output(arr){
    let text = "";
    for(let i = 0; i < arr.length; i++){
        text +=
        `
        <tr>
            <td>${arr[i].id}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].phone}</td>
            <td>${arr[i].address}</td>
            <td>${arr[i].gender}</td>
            <td>
                <button onclick="editUser(${arr[i].id})" >edit</button>|
                <button onclick="deleteUser(${arr[i].id})" >delete</button>
            </td>
        </tr>
        `
    }
    studentInfo.innerHTML = text;
}
