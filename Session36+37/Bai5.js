let input = document.getElementById("input");
function myFunction(){
    input.style.backgroundColor = "white";
}
let btn = document.getElementById("btn");
let ul = document.getElementById("list");
btn.onclick = function(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("list-item");
    ul.appendChild(li);
    input.value = null;
    if(input.value.length === 0){
        input.style.backgroundColor = "yellow";
    }
}