let input = document.getElementById("input");
input.value = "my item";
let btn = document.getElementById("btn");
let ul = document.getElementById("list");
let li = document.createElement("li");
btn.onclick = function(){
    li.innerHTML = input.value;
    ul.appendChild(li); 
    input.value = null; 
}