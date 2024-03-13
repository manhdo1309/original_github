let login = JSON.parse(localStorage.getItem("login")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

let userName = document.getElementById("username-render");
for(let i = 0; i < users.length; i++){
    if(login === users[i].name || login === users[i].email){
        userName.innerText = users[i].name;
    }
}

function logout(event){
    localStorage.removeItem("login");
    document.querySelectorAll(".unlog").forEach(element => {
        element.style.display = "block";
    });
    document.getElementById("render-user").innerHTML = "";
}