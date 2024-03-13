let todoListDatabase = [
    {
        id: 1,
        content: "Đánh răng",
        status: false,
    },
    {
        id: 2,
        content: "Rửa mặt",
        status: false,
    },
    {
        id: 3,
        content: "Ngủ sớm lúc 8h",
        status: true,
    },
    
];

let ul = document.getElementsByClassName("list")[0];
let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");


function renderTodoToHTML(){
    ul.innerHTML = "";
    for(let index in todoListDatabase){
        //ul.appendChild(li)
        let li = document.createElement("li");
        li.classList.add("list-item");
        li.id = todoListDatabase[index].id;
        li.innerText = todoListDatabase[index].content;
    
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Xóa";
        deleteBtn.classList.add("delete-btn");
        let editBtn = document.createElement("button");
        editBtn.innerText = "Sửa";
        editBtn.classList.add("edit-btn");
    
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        
        ul.appendChild(li);
        //ul.innerHTML = "<li></li>"
        // let li = `<li class="list-item" id="${todoListDatabase[index].id}>
        //             ${todoListDatabase[index].content}
        //             <button class="delete-btn">Xóa</button>
        //             <button class="edit-btn">Sửa</button>
        //          </li>`;
        // console.log(li);
        // ul.innerHTML += li;
    }
}
renderTodoToHTML();

addBtn.onclick = function(){
    input.value
    let newTodo = {
        id: todoListDatabase[todoListDatabase.length - 1].id + 1,
        content: input.value,
        status: false,
    }
    todoListDatabase.push(newTodo);
    renderTodoToHTML();
}


let a = 1 * "abc";
console.log(a);