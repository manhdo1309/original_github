let ul = document.createElement("ul");
let arr = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);